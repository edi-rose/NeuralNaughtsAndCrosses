/* this file manages the team settings for the Board.jsx component */

var userTeam = 'cross'
var botTeam = 'naught'

function token(teamName) {
  if(teamName == 'none'){
    return ' '
  }
  else if(teamName == 'cross'){
    return 'x'
  }
  else if(teamName == 'naught'){
    return 'o'
  }
}

module.exports = {
  userTeam: userTeam,
  token: token,
  botTeam: botTeam
}
