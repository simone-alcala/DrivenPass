import prisma from './../config/database.js'

import { Cards } from '@prisma/client';
import { DataCardCreate } from '../services/cardsService.js';

export async function create(createData: DataCardCreate){
  return await prisma.cards.create({ data: createData });
}

export async function findAll(userId: number){
  return await prisma.cards.findMany( { where: { userId } } ) as [Cards];
}

export async function findById(id: number, userId: number){
  return await prisma.cards.findFirst( { where: { id , userId } } ) as Cards;
}

export async function deleteById(id: number){
  return await prisma.cards.delete( { where: { id } } );
}

export async function findByUserIdAndTitle(userId: number, title: string){
  return await prisma.cards.findFirst( { where: { userId, title } } ) as Cards;
}