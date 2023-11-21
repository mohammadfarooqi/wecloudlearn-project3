import CourseService from '../services/courseService.js';
import createApiResponse from '../utils/apiResponse.js';
import { courseCreateSchema } from '../validations/courseValidation.js';
import cleanValidationError from '../utils/cleanValidationError.js';

async function get(req, res) {
  try {
    const courses = await CourseService.get();

    const response = createApiResponse('success', courses, null, null);
    res.status(200).json(response);
  } catch (error) {
    console.error('error', error);

    const response = createApiResponse(
      'error',
      null,
      'Internal server error',
      error.message
    );
    res.status(500).json(response);
  }
}

async function create(req, res) {
  try {
    const { error, value: data } = courseCreateSchema.validate(req.body);
    if (error) {
      const response = createApiResponse(
        'error',
        null,
        'Validation failed',
        cleanValidationError(error)
      );
      return res.status(400).json(response);
    }

    const newCourse = await CourseService.create(data);

    const response = createApiResponse('success', newCourse, null, null);
    res.status(201).json(response);
  } catch (error) {
    console.error('error', error);

    const response = createApiResponse(
      'error',
      null,
      'Internal server error',
      error.message
    );
    res.status(500).json(response);
  }
}

async function del(req, res) {
  try {
    const { courseId } = req.params;
    const deletedCourse = await CourseService.del(courseId);

    const response = createApiResponse(
      'success',
      deletedCourse,
      'Student deleted',
      null
    );
    res.status(200).json(response);
  } catch (error) {
    console.error('error', error);

    if (error.message.toLowerCase().includes('not found')) {
      const response = createApiResponse('error', null, null, error.message);
      return res.status(404).json(response);
    }
    const response = createApiResponse(
      'error',
      null,
      'Internal server error',
      error.message
    );
    res.status(500).json(response);
  }
}

export { get, create, del };
