import React from 'react'
import { Task } from './Task'

interface Props {
    task: Task
}

function TaskItem({task}: Props) {
    return (
        <div className="col-md-4">
          <div className="card card-body board-card">
            <div className="d-flex justify-content-between">
              <h1>{task.title}</h1>
              <span className="text-danger"> X </span>
            </div>
          </div>
        </div>
      );
}

export default TaskItem
