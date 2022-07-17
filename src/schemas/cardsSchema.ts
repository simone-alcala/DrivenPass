import Joi from 'joi';
import { DataCardCreate } from '../services/cardsService.js';

const cardsSchema = Joi.object<DataCardCreate>({
  title: Joi.string().trim().required(),
  number: Joi.string().creditCard().required(),
  name: Joi.string().trim().required(),
  cvv: Joi.string().trim().length(3).required(),
  expiration: Joi.string().pattern(new RegExp('^0([1-9]|1[0-2])\/([2-9][0-9])$')).required(),
  password: Joi.string().trim().required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().trim().valid('crédito','débito','ambos').required(),
})

export default cardsSchema;
