import React from 'react';
import TasksList from '../Task/TaskList';
import { Deck } from './Deck';
import * as DeckService from './DeckService'

interface Props {
  deck: Deck;
}

function DeckItem({ deck }: Props) {

  const handleDelete = async (boardId: string, deckId: string) => {
    await DeckService.deleteDeck(boardId, deckId);
  };
  return (
    <div className="col md-4">
      <div className="card card-body board-card">
        <div className="d-flex justify-content-between">
          <h1>{deck.title}</h1>
          <span className="text-danger" onClick={() => deck._id && handleDelete(deck.boardId, deck._id) }> X </span>
        </div>

        <TasksList deckId={`${deck._id}`} />
      </div>
    </div>
  );
}

export default DeckItem;
