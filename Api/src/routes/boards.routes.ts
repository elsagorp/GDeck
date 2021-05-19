import { Router } from 'express';
import * as boardCtrl from '../controllers/boards.controllers';

const router = Router();

router.get('/', boardCtrl.getBoards);

router.post('/', boardCtrl.createBoard);

router.delete('/:boardId', boardCtrl.deleteBoard);

router.put('/:boardId', boardCtrl.updateBoard);

export default router;
