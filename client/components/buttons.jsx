/* this component renders the try again and change team buttons */

import React from 'react'

export default function Buttons(props){
  return (
  <div className="buttons">
    <button onClick= {() =>props.resetBoard()}>Try Again</button>
    <button onClick={() => props.changeTeam()}>Change Teams</button>
  </div>
)
}
