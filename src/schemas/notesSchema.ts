import Joi from 'joi';
import { DataNoteCreate } from './../services/notesService.js';

const notesSchema = Joi.object<DataNoteCreate>({
  title: Joi.string().trim().max(50).required(),
  note: Joi.string().trim().max(1000).required(),
})

export default notesSchema;
