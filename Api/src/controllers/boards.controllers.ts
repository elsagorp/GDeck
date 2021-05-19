import { RequestHandler } from "express";

import Board from "../models/boards.models";

export const getBoard: RequestHandler = async (req, res) => {
  try {
    const boardFound = await Board.findById(req.params.boardId);
    res.json(boardFound);
  } catch (error) {
    res.status(404).json();
  }
};

export const getBoards: RequestHandler = async (req, res) => {
  try {
    const boardsFound = await Board.find();
    return res.json(boardsFound);
  } catch (error) {
    res.status(204);
  }
};

export const createBoard: RequestHandler = async (req, res) => {
  try {
    if (await Board.findOne({ title: req.body.title })) {
      return res.status(301).json({ message: "The board already exist" });
    } else {
      const newBoard = new Board(req.body);
      const savedBoard = newBoard.save();
      console.log(`${savedBoard} has been saved`);
    }
  } catch (error) {
    res.json(error);
  }
};

export const deleteBoard: RequestHandler = async (req, res) => {
  try {
    const boardDeleted = await Board.findByIdAndDelete(req.params.boardId);
    res.json(boardDeleted);
  } catch (error) {
    res.status(404).json();
  }
};

export const updateBoard: RequestHandler = async (req, res) => {
  try {
    const boardUpdate = await Board.findByIdAndUpdate(
      req.params.boardId,
      req.body,
      {
        new: true,
      }
    );
    res.json(boardUpdate);
  } catch (error) {
    res.status(404).json;
  }
};
