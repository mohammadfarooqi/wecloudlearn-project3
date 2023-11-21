import Joi from 'joi';

const courseCreateSchema = Joi.object({
  name: Joi.string().min(1).required(),
});

export { courseCreateSchema };
