import React from "react"
import Grid from '../components/Tetris/Grid.js'

import '../styles/tetris.css'

function Tetris(props){


    return(
        <div className="tetPage">
        <h1>Tetris</h1>

        <div>
            <Grid color = '1'/>
        </div>
      
        </div>
    )
}

export default Tetris