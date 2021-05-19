import React, { ChangeEvent, FormEvent, useState } from 'react';

import { Task } from './Task';
import * as taskService from './TaskService';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

interface Deck {
  deckId: string;
}
interface currentLocation {
  boardId: string;
}

function TaskForm(props: Deck) {
  const location: currentLocation = useParams();
  const [task, setTask] = useState<Task>({ title: '', body: '' });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('New task added');
    await taskService.createTask(task, location.boardId, props.deckId);
  };
  return (
    <div className="row">
      <div className="col ">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group p-1">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="ex: GDeck"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group p-1">
                <textarea
                  name="body"
                  rows={3}
                  className="form-control"
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary ">
                Create Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}

export default TaskForm;
