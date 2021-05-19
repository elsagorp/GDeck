import React, { useEffect, useState } from 'react';

import { Deck } from './Deck';
import * as deckService from './DeckService';
import DeckItem from './DeckItem';
import { useParams } from 'react-router';

interface currentLocation {
  boardId: string;
}
const DeckList = () => {
  const location: currentLocation = useParams();

  const [decks, setDeacks] = useState<Deck[]>([]);
  const loadDeacks = async () => {
    const res = await deckService.getDecks(location.boardId);
    setDeacks(res.data);
  };

  useEffect(() => {
    loadDeacks();
  }, []);

  return (
    <div className="row">
      {decks.map((deck) => {
        return <DeckItem deck={deck} key={deck._id} />;
      })}
    </div>
  );
};

export default DeckList;
