import { Cards } from '@prisma/client';
import * as repository from './../repositories/cardsRepository.js';
import { encryptPassword, decryptPassword } from '../utils/encryptPassword.js';

export type DataCardCreate = Omit<Cards,'id'>;

export async function create(createData: DataCardCreate) {
  const titleSearch = await repository.findByUserIdAndTitle(createData.userId, createData.title);
  if (titleSearch) throw { type: 'conflict', message: 'Title already registered' };
  const { password } = createData;
  const { cvv } = createData;
  createData.password = encryptPassword(password);
  createData.cvv = encryptPassword(cvv);
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