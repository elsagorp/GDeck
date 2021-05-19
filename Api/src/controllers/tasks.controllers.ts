import { RequestHandler } from "express";
import Task from "../models/tasks.models";

export const getTask: RequestHandler = async (req, res) => {
  try {
    const taskFound = await Task.find({
      _id: req.params.taskId,
      deckId: req.params.deckId,
    });
    res.json(taskFound);
  } catch (error) {
    res.status(404).json();
  }
};
export const getTasks: RequestHandler = async (req, res) => {
  try {
    const notes = await Task.find({ deckId: req.params.deckId });
    res.json(notes);
  } catch (error) {
    res.status(404).json();
  }
};
export const createTask: RequestHandler = async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      body: req.body.body,
      deckId: req.params.deckId,
    });
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (error) {
    res.json(error);
  }
};

export const deleteTask: RequestHandler = async (req, res) => {
  try {
    const taskFound = await Task.findByIdAndDelete(req.params.taskId);
    res.json(taskFound);
  } catch (error) {
    res.status(204).json();
  }
};

export const updateTask: RequestHandler = (req, res) => {
  res.json("Update task");
};
