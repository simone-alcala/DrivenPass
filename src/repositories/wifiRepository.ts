import prisma from './../config/database.js'

import { Wifi } from '@prisma/client';
import { DataWifiCreate } from '../services/wifiService.js';

export async function create(createData: DataWifiCreate){
  return await prisma.wifi.create({ data: createData });
}

export async function findAll(userId: number){
  return await prisma.wifi.findMany( { where: { userId } } ) as [Wifi];
}

export async function findById(id: number, userId: number){
  return await prisma.wifi.findFirst( { where: { id, userId } } ) as Wifi;
}

export async function deleteById(id: number){
  return await prisma.wifi.delete( { where: { id } } );
}