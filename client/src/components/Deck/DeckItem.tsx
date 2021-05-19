import React from "react";
import TasksList from '../Task/TaskList'
import { Deck } from "./Deck";

interface Props {
  deck: Deck;
}

function DeckItem({ deck }: Props) {
  return (
    <div className="col-md-4">
      <div className="card card-body board-card">
        <div className="d-flex justify-content-between">
          <h1>{deck.title}</h1>
          <span className="text-danger"> X </span>
        </div>
        
        <TasksList  deckId = {`${deck._id}`} />
      </div>
    </div>
  );
}

export default DeckItem;
