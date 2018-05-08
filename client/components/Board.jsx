/*This component holds the board and accounts for most of the functionality,
it is the parent of buttons and scoreboard components */

import React from 'react'
var userTeam = require('../settings').userTeam
var botTeam = require('../settings').botTeam
var token = require('../settings').token
var board = require('../boardArray')
var checkForWin = require('../winCheck')
import ScoreBoard from './scoreBoard'
import Buttons from './buttons'
var getNetwork = require('../network/network.js')
var saveBoard = require('../api').saveBoard

var count = 1

class Board extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      grid: [
        [board[0], board[1], board[2]],
        [board[3], board[4], board[5]],
        [board[6], board[7], board[8]]
        // [topLeft,topMid,topRight],
        // [midLeft,midMid,midRight],
        // [botLeft,botMid,botRight]
      ],
      naughtsScore: 0,
      crossesScore: 0,
      gameOver:false
    }
    this.userClick = this.userClick.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
    this.changeTeam = this.changeTeam.bind(this)
    this.checkWins = this.checkWins.bind(this)
  }
  resetBoard() {
  for(const cell of board){
    this.claimSquare(cell, 'none')
  }
  this.setState({
    gameOver: false
  })
  this.setState({
    userPaused: false
  })
  count = 1
  if(botTeam == 'cross'){
    let cell = this.getCell()
    const {grid} = this.state
    let found
    grid.forEach(row => row.forEach(c => {
      if (c == cell) found = cell
    }))
    found.teamName = 'cross'
    this.setState({grid: grid})
  }
  }
  getCell(){
    let board = this.state.grid[0].concat(this.state.grid[1], this.state.grid[2])
    let options = getNetwork(board, botTeam)
    let chosen = null
    const {grid} = this.state
    for (var i = 0; i < options.length; i++) {
      board.forEach(function(cell) {
        if(cell.name == options[i] && cell.teamName == 'none' && chosen == null){
          chosen = cell
        }
      })
    }
  return chosen
  }
  claimSquare(cell, team){
    const {grid} = this.state
    let found
    grid.forEach(row => row.forEach(c => {
      if (c == cell) found = cell
    }))
    found.teamName = team
    this.setState({grid, userPaused: !this.state.userPaused})
  }
  changeTeam() {
    if(userTeam == 'cross'){
      userTeam = 'naught'
      botTeam = 'cross'
    }
    else {
      userTeam = 'cross'
      botTeam = 'naught'
    }
    this.resetBoard()
  }
  userClick(cell) {
    if (this.state.gameOver) return
    if (this.state.userPaused) return
    if (cell.teamName !== 'none') return
    this.claimSquare(cell, userTeam)
    setTimeout(() => {
      var {grid} = this.state
      this.claimSquare(this.getCell(), botTeam)
      this.checkWins()
      saveBoard(this.state.grid)
      this.checkWins()
    }, 2000)
    saveBoard(this.state.grid)
    this.checkWins()
  }
  checkWins(){
    if(checkForWin('cross')){
        this.setState({
          crossesScore: this.state.crossesScore + 1,
          gameOver:true
        })
      }
    if(checkForWin('naught')){
        this.setState({
          naughtsScore: this.state.naughtsScore + 1,
          gameOver:true
      })
    }
  }
  render() {
    return (
      <div>
        <div className="game">
        <table className='board'>
        <tbody>
          {this.state.grid && this.state.grid.map((row) => {
            return (
              <tr className='board'>
                {row.map((cell) => {
                  return <td onClick={() => this.userClick(cell)} className='boardMain'>
                    <div className= 'token'>{(token(cell.teamName))}</div>
                  </td>
                })}
              </tr>
            )
          })}
        </tbody>
        </table>
      </div>
      <div className="addOns">
      <div className="scoreBoard">
        <ScoreBoard naughtsScore = {this.state.naughtsScore} crossesScore = {this.state.crossesScore}/>
      </div>
      <div className="buttons">
        <Buttons resetBoard={this.resetBoard} changeTeam={this.changeTeam} />
      </div>
      </div>
    </div>
    )
  }
}

function isAvailable(cell) {
  if(cell.teamName == 'none'){
    return true
  }
  return false
}

module.exports = {
  Board: Board
}
