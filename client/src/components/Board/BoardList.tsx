import React, { useEffect, useState } from 'react';

import { Board } from './Board';
import * as boardService from './BoardService';
import BoardItem from './BoardItem';

const BoardList = () => {
  const [boards, setBoards] = useState<Board[]>([]);
  const loadBoards = async () => {
    const res = await boardService.getBoards();
    setBoards(res.data);
  };

  useEffect(() => {
    loadBoards();
  }, []);

  return (
    <div className="row">
      {boards.map((board) => {
        return <BoardItem board={board} key={board._id} />;
      })}
    </div>
  );
};

export default BoardList;
