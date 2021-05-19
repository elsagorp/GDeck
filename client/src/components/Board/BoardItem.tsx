import React from 'react';
import { Board } from './Board';
import './BoardItem.css';
import { useHistory } from 'react-router-dom';

interface Props {
  board: Board;
}

function BoardItem({ board }: Props) {
  const history = useHistory();
  return (
    <div className="col-md-4">
      <div
        className="card card-body board-card"
        onClick={() => history.push(`/board/${board._id}`)}
      >
        <div className="d-flex justify-content-between">
          <h1>{board.title}</h1>
          <span className="text-danger"> X </span>
        </div>
        <p>{board.description}</p>
      </div>
    </div>
  );
}

export default BoardItem;
