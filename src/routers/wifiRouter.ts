import { Router } from 'express';

import { create, getAll, getById, deleteById } from '../controllers/wifiController.js';
import { validateParamsSchemaMiddleware, validateSchemaMiddleware } from '../middleware/validateSchemaMiddleware.js';
import wifiSchema from '../schemas/wifiSchema.js';
import idSchema from '../schemas/idSchema.js';
import hasToken from '../middleware/validateTokenMiddleware.js';

const wifiRouter = Router();

wifiRouter.post('/wifi', validateSchemaMiddleware(wifiSchema), create);
wifiRouter.get('/wifi', hasToken, getAll);
wifiRouter.get('/wifi/:id', hasToken, validateParamsSchemaMiddleware(idSchema), getById);
wifiRouter.delete('/wifi/:id', hasToken, validateParamsSchemaMiddleware(idSchema), deleteById);

export default wifiRouter;