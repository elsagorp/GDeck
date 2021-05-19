import { RequestHandler } from 'express';

import Deck from '../models/decks.models';

export const getDeck: RequestHandler = async (req, res) => {
  try {
    const deckFound = await Deck.findById(req.params.deckId);
    res.json(deckFound);
  } catch (error) {
    res.status(404).json();
  }
};

export const getDecks: RequestHandler = async (req, res) => {
  try {
    const decksFound = await Deck.find({
      boardId: req.params.boardId,
    });
    return res.json(decksFound);
  } catch (error) {}
};

export const createDeck: RequestHandler = async (req, res) => {
  try {
    const newDeck = new Deck({
      title: req.body.title,
      boardId: req.params.boardId,
    });
    const savedDeck = await newDeck.save();
    res.json(savedDeck);
  } catch (error) {
    res.json(error);
  }
};

export const deleteDeck: RequestHandler = async (req, res) => {
  try {
    const deckFound = await Deck.findByIdAndDelete(req.params.deckId);
    res.json(deckFound);
  } catch (error) {
    res.status(404).json();
  }
};

export const updateDeck: RequestHandler = async (req, res) => {
  res.json('Update task');
};
