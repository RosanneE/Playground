
import TetSquare from "./TetSquare";

export default function Next(props){
    const nextBox = [[0,0,0,0], [0,0,0,0], [0,0,0,0]]

    const nextGrid = nextBox.map((rowArray, row) =>{
        return rowArray.map ((square, col) => {
            return <TetSquare key={`${row}${col}`} color={square} />
        })
    })

    return (
        <div className="nextGrid">
            {nextGrid}
        </div>
    )
}