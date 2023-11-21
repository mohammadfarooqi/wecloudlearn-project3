import ResultService from '../services/resultService.js';
import createApiResponse from '../utils/apiResponse.js';
import { resultCreateSchema } from '../validations/resultValidation.js';
import cleanValidationError from '../utils/cleanValidationError.js';

async function get(req, res) {
  try {
    const results = await ResultService.get();

    const response = createApiResponse('success', results, null, null);
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
    const { error, value: data } = resultCreateSchema.validate(req.body);
    if (error) {
      const response = createApiResponse(
        'error',
        null,
        'Validation failed',
        cleanValidationError(error)
      );
      return res.status(400).json(response);
    }

    const newResult = await ResultService.create(data);

    const response = createApiResponse('success', newResult, null, null);
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

export { get, create };
