import Joi from 'joi';
import { DataSignUp } from '../services/authService.js';

const authSchema = Joi.object<DataSignUp>({
  email:  Joi.string().trim().email().required(),
  password: Joi.string().trim().min(10).required(),
})

export default authSchema;
