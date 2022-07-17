import { Router } from 'express';

import { create, getAll, getById, deleteById } from './../controllers/credentialsController.js';
import { validateParamsSchemaMiddleware, validateSchemaMiddleware } from '../middleware/validateSchemaMiddleware.js';
import credentialsSchema from '../schemas/credentialsSchema.js';
import idSchema from '../schemas/idSchema.js';
import hasToken from '../middleware/validateTokenMiddleware.js';

const credentialsRouter = Router();

credentialsRouter.post('/credentials', validateSchemaMiddleware(credentialsSchema), create);
credentialsRouter.get('/credentials', hasToken, getAll);
credentialsRouter.get('/credentials/:id', hasToken, validateParamsSchemaMiddleware(idSchema), getById);
credentialsRouter.delete('/credentials/:id', hasToken, validateParamsSchemaMiddleware(idSchema), deleteById);

export default credentialsRouter;