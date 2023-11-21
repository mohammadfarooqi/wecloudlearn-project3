import Joi from 'joi';

const studentCreateSchema = Joi.object({
  first_name: Joi.string().min(1).required(),
  last_name: Joi.string().min(1).required(),
  date_of_birth: Joi.date().iso().required(),
  email: Joi.string().email().required(),
});

export { studentCreateSchema };
