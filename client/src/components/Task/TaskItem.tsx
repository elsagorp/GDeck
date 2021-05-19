import React from 'react';
import { Task } from './Task';

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  return (
    <div className="col md-4 p-2">
      <div className="card card-body board-card">
        <div className="d-flex justify-content-between">
          <h1>{task.title}</h1>
          <span className="text-danger"> X </span>
        </div>
        <p>{task.body}</p>
      </div>
    </div>
  );
}

export default TaskItem;
