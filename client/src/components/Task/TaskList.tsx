import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Task } from "./Task";
import TaskItem from "./TaskItem";
import * as taskService from "./TaskService";

interface Deck {
  deckId: string;
}
interface currentLocation {
  boardId: string;
}

const TaskList = (props: Deck) => {
  const location: currentLocation = useParams();
  const [tasks, setTask] = useState<Task[]>([]);
  const loadTasks = async () => {
    const res = await taskService.getTasks(location.boardId, props.deckId);
    setTask(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="row">
      {tasks.map((task) => {
        return <TaskItem task={task} key={task._id} />;
      })}
    </div>
  );
};

export default TaskList;
