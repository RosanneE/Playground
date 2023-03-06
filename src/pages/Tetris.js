import React from "react";
import TetSquare from "../components/Tetris/TetSquare.js";
import TetBoard from "../components/Tetris/TetBoard.js";
import TetNext from "../components/Tetris/TetNext";

import "../styles/tetris.css";

function Tetris(props) {
  return (
    <div className="tetPage">
      <h1>Tetris</h1>
      <div className="tetGame">
        <div className="tetNext">
        <TetNext />
        </div>
        <div className="tetBoard">
          <TetBoard />
        </div>
      </div>
    </div>
  );
}

export default Tetris;
