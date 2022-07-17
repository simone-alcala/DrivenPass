import Joi from 'joi';

const idSchema = Joi.object({
  id: Joi.string().trim().pattern(new RegExp('^[0-9]+$')).required(),
})

export default idSchema;