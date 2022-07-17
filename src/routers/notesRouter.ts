import { Router } from 'express';

import { create, getAll, getById, deleteById } from './../controllers/notesController.js';
import { validateParamsSchemaMiddleware, validateSchemaMiddleware } from '../middleware/validateSchemaMiddleware.js';
import notesSchema from '../schemas/notesSchema.js';
import idSchema from '../schemas/idSchema.js';
import hasToken from '../middleware/validateTokenMiddleware.js';

const notesRouter = Router();

notesRouter.post('/notes', validateSchemaMiddleware(notesSchema), create);
notesRouter.get('/notes', hasToken, getAll);
notesRouter.get('/notes/:id', hasToken, validateParamsSchemaMiddleware(idSchema), getById);
notesRouter.delete('/notes/:id', hasToken, validateParamsSchemaMiddleware(idSchema), deleteById);

export default notesRouter;