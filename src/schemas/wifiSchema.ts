import Joi from 'joi';
import { DataWifiCreate } from './../services/wifiService.js';

const wifiSchema = Joi.object<DataWifiCreate>({
  title: Joi.string().trim().required(),
  name: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
})

export default wifiSchema;
