import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Board } from './Board';
import * as boardService from './BoardService';
import { toast } from 'react-toastify';

function BoardForm() {
  const history = useHistory();
  const [board, setBoard] = useState<Board>({ title: '', description: '' });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('New board added');
    await boardService.createBoard(board);
    history.push('/');
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Board</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Board Name</label>
                <input
                  type="text"
                  name="title"
                  className="form-control mt-1"
                  placeholder="ex: GDeck"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Board description</label>
                <textarea
                  name="description"
                  rows={3}
                  className="form-control mt-1"
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-5">
                Create Board
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardForm;
