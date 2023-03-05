import React, { useState } from "react";

function TicTac(props) {
  // player false = x
  let player = false;
//   let ticToken = "";
    const [ticToken, setTicToken] = useState('')
  const ticOnClick = (event) => {
    if (player) {
      
      setTicToken = "o"
      player = !player
      console.log(ticToken);
    } else {
      
      setTicToken = "x"
      player = !player
      console.log(ticToken);
    }
    // player = !player;
    console.log(player);
  };

  function ticReset() {
    player = !player;
    // console.log(player);
    console.log("reset");
  }
  return (
    <div className="tic">
      <h1>Tic-Tac-Toe</h1>

      <div className="ticBoard">
        <div className="row">
          <button id="0" className="square" onClick={{ticOnClick}}>
            {ticToken}
          </button>
          <button id="1" className="square" onClick={ticOnClick}>
            {ticToken}
          </button>
          <button id="2" className="square" onClick={ticOnClick}>
            {ticToken}
          </button>
        </div>
        <div className="row">
          <button id="3" className="square" onClick={ticOnClick}>
            {ticToken}
          </button>
          <button id="4" className="square" onClick={ticOnClick}>
            {ticToken}
          </button>
          <button id="5" className="square" onClick={ticOnClick}>
            {ticToken}
          </button>
        </div>
        <div className="row">
          <button id="6" className="square" onClick={ticOnClick}>
            {ticToken}
          </button>
          <button id="7" className="square" onClick={ticOnClick}>
            {ticToken}
          </button>
          <button id="8" className="square" onClick={ticOnClick}>
            {ticToken}
          </button>
        </div>
      </div>
      <button
        className="button-78"
        role="button"
        onClick={(event) => ticReset()}
      >
        Reset
      </button>
    </div>
  );
}

export default TicTac;
