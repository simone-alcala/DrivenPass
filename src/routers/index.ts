import { Router } from 'express';

import authRouter from './authRouter.js';
import cardRouter from './cardsRouter.js';
import credentialsRouter from './credentialsRouter.js';
import notesRouter from './notesRouter.js';
import wifiRouter from './wifiRouter.js';

const router = Router();

router.use(authRouter);
router.use(cardRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(wifiRouter);

export default router;