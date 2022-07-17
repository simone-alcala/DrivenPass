import { Wifi } from '@prisma/client';
import * as repository from './../repositories/wifiRepository.js';
import { encryptPassword, decryptPassword } from '../utils/encryptPassword.js';

export type DataWifiCreate = Omit<Wifi,'id'>;

export async function create(createData: DataWifiCreate) {
  const { password } = createData;
  createData.password = encryptPassword(password);
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