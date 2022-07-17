import { Notes } from '@prisma/client';
import * as repository from './../repositories/notesRepository.js';

export type DataNoteCreate = Omit<Notes,'id'>;

export async function create(createData: DataNoteCreate) {
  const titleSearch = await repository.findByUserIdAndTitle(createData.userId, createData.title);
  if (titleSearch) throw { type: 'conflict', message: 'Title already registered' };
  return await repository.create(createData);
}

export async function getAll(userId: number) {
  return await repository.findAll(userId);
}

export async function getById(id: number, userId: number) {
  return await repository.findById(id, userId);
}

export async function deleteById(id: number, userId: number) {

  const infoSearch = await repository.findById(id, userId);
  if (!infoSearch) throw { type: 'not_found', message: 'Id not found' };
  
  return await repository.deleteById(id);
}
