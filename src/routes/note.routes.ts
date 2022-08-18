import { Router } from "express";
import { Request, Response, NextFunction } from "express";

import {
  createNote,
  getNote,
  getNotes,
  getUserNotes,
  updateNote,
  deleteNote,
} from "../controllers/note.controller";
import { validateNoteBody, validateNoteParam, validateUpdateNote } from './note.validators';

const router = Router();

router.get("/notes", getNotes);

router.get(
  "/notes/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await validateNoteParam.validateAsync(req.params);
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);      
    }
  },
  getNote,
);

router.get(
  "/notes/user/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('35', 'here\n', req.params );
      const result = await validateNoteParam.validateAsync(req.params);
      console.log('36', 'result', result);
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);      
    }
  },
  getUserNotes,
);

router.post(
  "/notes",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await validateNoteBody.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);      
    }
  },
  createNote,
);

router.put(
  "/notes/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await validateUpdateNote.validateAsync({ ...req.body, ...req.params });
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);      
    }
  },
  updateNote,
);

router.delete(
  "/notes/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await validateNoteParam.validateAsync(req.params);
      next();
    } catch (error) {
      return res.status(400).json(`Invalid request! ${(error as Error).message}`);      
    }
  },
  deleteNote
);

export default router;