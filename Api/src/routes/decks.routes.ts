import { Router } from 'express';
import * as deckCtrl from '../controllers/decks.controllers';

const router = Router();

router.get('/:boardId/', deckCtrl.getDecks);

router.get('/:boardId/:deckId', deckCtrl.getDeck);

router.post('/:boardId/', deckCtrl.createDeck);

router.delete('/:boardId/:deckId', deckCtrl.deleteDeck);

router.put('/:boardId/:deckId', deckCtrl.updateDeck);

export default router;
