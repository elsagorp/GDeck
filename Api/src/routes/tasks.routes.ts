import { Router } from "express";
import * as taskCtrl from "../controllers/tasks.controllers";

const router = Router();

router.get("/:boardId/:deckId/", taskCtrl.getTasks);

router.get("/:boardId/:deckId/:taskId", taskCtrl.getTask);

router.post("/:boardId/:deckId", taskCtrl.createTask);

router.delete("/:boardId/:deckId/:taskId", taskCtrl.deleteTask);

router.put("/:boardId/:deckId/:taskId", taskCtrl.updateTask);

export default router;
