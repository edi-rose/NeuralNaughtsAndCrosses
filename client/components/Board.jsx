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
var getNetwork = require('../api.js').getNetwork
var saveBoard = require('../api').saveBoard
const concatBoard = require('../arrangeBoard').concatBoard
const getNetworkReccomendation = require('../network/network')
var count = 1
const trainNetwork = require('../network/trainer')

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
      gameOver:false,
      moveList: []
    }
    this.userClick = this.userClick.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
    this.changeTeam = this.changeTeam.bind(this)
    this.checkWins = this.checkWins.bind(this)
    this.handleNetwork = this.handleNetwork.bind(this)
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
    let options = this.state.moveList
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
    this.checkWins(concatBoard(this.state.grid))
      if(this.state.gameOver) return
    setTimeout(() => {
      if(this.state.gameOver) return
      var {grid} = this.state
      this.claimSquare(this.getCell(), botTeam)
      saveBoard(this.state.grid)
      this.checkWins(concatBoard(this.state.grid))
      getNetwork(this.handleNetwork, botTeam, concatBoard(this.state.grid))
    }, 2000)
    saveBoard(this.state.grid)
  }
  checkWins(board){
    if(checkForWin('cross', board)){
        this.setState({
          crossesScore: this.state.crossesScore + 1,
          gameOver:true
        })
      }
    if(checkForWin('naught', board)){
        this.setState({
          naughtsScore: this.state.naughtsScore + 1,
          gameOver:true
      })
    }
  }
  handleNetwork(data, team, board ){
    this.setState({
      moveList: getNetworkReccomendation(JSON.parse(data), team, board)
    })
    return true
  }
  componentWillMount(){
     getNetwork(this.handleNetwork, botTeam, concatBoard(this.state.grid))
  }
  render() {
    return (
      <div>
        <div className="game">
        <table className='board'>
        <tbody>
          {this.state.grid && this.state.grid.map((row, idx) => {
            return (
              <tr key={idx} className='board'>
                {row.map((cell, idx) => {
                  return <td onClick={() => this.userClick(cell)} key={idx} className='boardMain'>
                    <div key={idx} className= 'token'>{(token(cell.teamName))}</div>
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
