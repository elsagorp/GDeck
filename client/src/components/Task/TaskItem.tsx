import React from 'react';
import { useParams } from 'react-router-dom';
import { Task } from './Task';
import * as TaskService from './TaskService'

interface Props {
  task: Task;
}

interface currentLocation {
  boardId: string;
}

function TaskItem({ task }: Props) {
  const location: currentLocation = useParams();
  console.log(location)

  const handleDelete = async (task : Task) => {
    await TaskService.deleteTask(location.boardId, task);
  };

  return (
    <div className="col md-4 p-2">
      <div className="card card-body board-card">
        <div className="d-flex justify-content-between">
          <h1>{task.title}</h1>
          <span className="text-danger" onClick={() => task._id && handleDelete(task) }> X </span>
        </div>
        <p>{task.body}</p>
      </div>
    </div>
  );
}

export default TaskItem;
