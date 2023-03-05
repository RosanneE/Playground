import React from "react";
import TetSquare from "./TetSquare";

export default function tetBoard(props) {
  const tetBoard = [];
  for (let row = 0; row < 20; row++) {
    tetBoard.push([]);
    for (let col = 0; col < 10; col++) {
      tetBoard[row].push(<TetSquare key={`${col}${row}`} color="2" />);
    }
  }

  return <div className="tetGridBoard">{tetBoard}</div>;
}
