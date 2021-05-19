import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Deck } from './Deck';
import * as deckService from './DeckService';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';

interface currentLocation {
  boardId: string;
}

function DeckForm() {
  const location: currentLocation = useParams();

  const [deck, setDeck] = useState<Deck>({
    title: '',
    boardId: location.boardId,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeck({ ...deck, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('New board added');
    await deckService.createDeck(deck);
  };

  return (
    <div className="col-md-2 ">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="row">
                <input
                  type="text"
                  name="title"
                  className="form-control mt-1 col-sm"
                  placeholder="ex: TODO"
                  onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-primary col-sm-3 mx-3">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeckForm;
