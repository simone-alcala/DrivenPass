import { Router } from 'express';

import { create, getAll, getById, deleteById } from './../controllers/cardsController.js';
import { validateParamsSchemaMiddleware, validateSchemaMiddleware } from '../middleware/validateSchemaMiddleware.js';
import cardsSchema from '../schemas/cardsSchema.js';
import idSchema from '../schemas/idSchema.js';
import hasToken from '../middleware/validateTokenMiddleware.js';

const cardRouter = Router();

cardRouter.post('/cards', validateSchemaMiddleware(cardsSchema), create);
cardRouter.get('/cards', hasToken, getAll);
cardRouter.get('/cards/:id', hasToken, validateParamsSchemaMiddleware(idSchema), getById);
cardRouter.delete('/cards/:id', hasToken, validateParamsSchemaMiddleware(idSchema), deleteById);

export default cardRouter;