import { Notes } from '@prisma/client';
import { Request, Response } from 'express';

import * as service from './../services/notesService.js';
import * as userService from './../services/authService.js';

export async function create(req: Request, res: Response) {
  const token = req.headers['authorization'] as string;
  const { title, note }  = req.body as Notes; 
  const userId = await userService.getUserIdByToken(token);
  await service.create({ title, note, userId });
  res.sendStatus(201); 
}

export async function getAll(req: Request, res: Response) {
  const token = req.headers['authorization'] as string;
  const userId = await userService.getUserIdByToken(token);
  const result = await service.getAll(userId);
  res.status(200).send(result); 
}

export async function getById(req: Request, res: Response) {
  const token = req.headers['authorization'] as string;
  const { id } = req.params;
  const userId = await userService.getUserIdByToken(token);
  const result = await service.getById(Number(id), userId);
  res.status(200).send(result); 
}

export async function deleteById(req: Request, res: Response) {
  const token = req.headers['authorization'] as string;
  const { id } = req.params;
  const userId = await userService.getUserIdByToken(token);
  await service.deleteById(Number(id), userId);
  res.sendStatus(200);
}