import React from 'react';
import { Board } from './Board';
import './BoardItem.css';
import { useHistory } from 'react-router-dom';
import * as BoardService from './BoardService';

interface Props {
  board: Board;
}

function BoardItem({ board }: Props) {
  const history = useHistory();
  const handleDelete = async (id: string) => {
    await BoardService.deleteBoard(id);
  };
  
  return (
    <div className="col-md-4">
      <div className="card card-body board-card">
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history.push(`/board/${board._id}`)}>
            {board.title}
          </h1>
          <span
            className="text-danger"
            onClick={() => board._id && handleDelete(board._id) }
          >
            {' '}
            X{' '}
          </span>
        </div>
        <p>{board.description}</p>
      </div>
    </div>
  );
}

export default BoardItem;
