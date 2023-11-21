import Joi from 'joi';

const resultCreateSchema = Joi.object({
  student_id: Joi.number().integer().positive().required(),
  course_id: Joi.number().integer().positive().required(),
  grade: Joi.string().valid('A', 'B', 'C', 'D', 'E', 'F').required(),
});

export { resultCreateSchema };
