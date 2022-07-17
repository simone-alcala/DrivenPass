import Joi from 'joi';
import { DataCredentialCreate } from './../services/credentialsService.js';

const credentialsSchema = Joi.object<DataCredentialCreate>({
  title: Joi.string().trim().required(),
  url: Joi.string().trim().uri(),
  login: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
})

export default credentialsSchema;
