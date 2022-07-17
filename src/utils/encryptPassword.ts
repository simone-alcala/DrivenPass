import Cryptr from 'cryptr';
import dotenv from 'dotenv';

dotenv.config();
const cryptr = new Cryptr(process.env.CRYPTR);

export function encryptPassword(password: string){
  return cryptr.encrypt(password);
}

export function decryptPassword(password: string){
  return cryptr.decrypt(password);
}