import prisma from './../config/database.js'

import { Credentials } from '@prisma/client';
import { DataCredentialCreate } from '../services/credentialsService.js';

export async function create(createData: DataCredentialCreate){
  return await prisma.credentials.create({ data: createData });
}

export async function findAll(userId: number){
  return await prisma.credentials.findMany( { where: { userId } } ) as [Credentials];
}

export async function findById(id: number, userId: number){
  return await prisma.credentials.findFirst( { where: { id, userId } } ) as Credentials;
}

export async function deleteById(id: number){
  return await prisma.credentials.delete( { where: { id } } );
}

export async function findByUserIdAndTitle(userId: number, title: string){
  return await prisma.credentials.findFirst( { where: { userId, title } } ) as Credentials;
}