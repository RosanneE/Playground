import React from "react"
import TetSquare from '../components/Tetris/TetSquare.js'
import TetBoard from "../components/Tetris/TetBoard.js"

import '../styles/tetris.css'

function Tetris(props){

    return(
        <div className="tetPage">
        <h1>Tetris</h1>

        <div className="tetBoard">
            <TetBoard/>
        </div>
      
      
        </div>
    )
}

export default Tetris