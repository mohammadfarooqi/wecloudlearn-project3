import StudentService from '../services/studentService.js';
import createApiResponse from '../utils/apiResponse.js';
import { studentCreateSchema } from '../validations/studentValidation.js';
import cleanValidationError from '../utils/cleanValidationError.js';

async function get(req, res) {
  try {
    const students = await StudentService.get();

    const response = createApiResponse('success', students, null, null);
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
    const { error, value: data } = studentCreateSchema.validate(req.body);
    if (error) {
      const response = createApiResponse(
        'error',
        null,
        'Validation failed',
        cleanValidationError(error)
      );
      return res.status(400).json(response);
    }

    const newStudent = await StudentService.create(data);

    const response = createApiResponse('success', newStudent, null, null);
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
    const { studentId } = req.params;
    const deletedStudent = await StudentService.del(studentId);

    const response = createApiResponse(
      'success',
      deletedStudent,
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
