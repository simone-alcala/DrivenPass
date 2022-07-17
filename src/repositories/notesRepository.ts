import prisma from './../config/database.js'

import { Notes } from '@prisma/client';
import { DataNoteCreate } from '../services/notesService.js';

export async function create(createData: DataNoteCreate){
  return await prisma.notes.create({ data: createData });
}

export async function findAll(userId: number){
  return await prisma.notes.findMany( { where: { userId } } ) as [Notes];
}

export async function findById(id: number, userId: number){
  return await prisma.notes.findFirst( { where: { id, userId } } ) as Notes;
}

export async function deleteById(id: number){
  return await prisma.notes.delete( { where: { id } } );
}

export async function findByUserIdAndTitle(userId: number, title: string){
  return await prisma.notes.findFirst( { where: { userId, title } } ) as Notes;
}