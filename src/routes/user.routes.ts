import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { body, param, validationResult } from 'express-validator';

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

const router = Router();

const validateReques = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.get("/users", getUsers);

router.get(
  "/users/:id",
  param('id').isString().isLength({ min: 1 }),
  validateReques,
  getUser,
);

router.post(
  "/users",
  body('firstname').isString().isLength({ min: 4 }).withMessage('It must be grater than 3 characters'),
  body('lastname').isString().isLength({ min: 4 }),
  body('email').isEmail(),
  validateReques,
  createUser,
);

router.put(
  "/users/:id",
  param('id').isString().isLength({ min: 1 }),
  body('firstname').isString().isLength({ min: 4 }).optional(),
  body('lastname').isString().isLength({ min: 4 }).optional(),
  body('active').isBoolean().optional(),
  body('email').isEmail().optional(),
  validateReques,
  updateUser,
);

router.delete(
  "/users/:id",
  param('id').isString().isLength({ min: 1 }),
  validateReques,
  deleteUser,
);

export default router;