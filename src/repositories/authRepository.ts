import prisma from './../config/database.js'

import { DataSignUp } from '../services/authService.js';

export async function signUp(createData: DataSignUp){
  return await prisma.users.create({ data: createData });
}

