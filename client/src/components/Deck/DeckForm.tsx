import React, { ChangeEvent, FormEvent, useState } from 'react';
import {Deck} from './Deck';
import * as deckService from './DeckService';
import {toast} from 'react-toastify'
import { useParams } from 'react-router';

interface currentLocation {
    boardId: string;
  }

function DeckForm() {
    const location: currentLocation = useParams();
    
    const [deck, setDeck] = useState<Deck>({title:'', boardId: location.boardId})

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>
      ) => {
        setDeck({ ...deck, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success('New board added');
        await deckService.createDeck(deck)
    };

    return (
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-body">
                <h3>New Deck</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Deck Name</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control mt-1"
                      placeholder="ex: TODO"
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-5">
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default DeckForm;
