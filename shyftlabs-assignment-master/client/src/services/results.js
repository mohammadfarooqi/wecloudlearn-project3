import { handleResponse, handleError } from '../utils';

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

function getAll() {
  // `/api/results`
  return fetch(`${apiUrl}/results`).then(handleResponse).catch(handleError);
}

function create(result) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  };
  // '/api/results'
  return fetch(`${apiUrl}/results`, requestOptions)
    .then(handleResponse)
    .catch(handleError);
}

const courses = {
  getAll,
  create,
};

export default courses;
