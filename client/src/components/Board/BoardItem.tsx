import React from "react";
import {Board} from './Board'

interface Props {
    board: Board
}

function BoardItem({board}: Props) {
  return (
    <div>
      <h1>{board.title}</h1>
      <p>{board.description}</p>
    </div>
  );
}

export default BoardItem;
