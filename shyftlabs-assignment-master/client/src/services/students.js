import { handleResponse, handleError } from '../utils';

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

function getAll() {
  // `/api/students`
  return fetch(`${apiUrl}/students`).then(handleResponse).catch(handleError);
}

function create(student) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  };
  // '/api/students'
  return fetch(`${apiUrl}/students`, requestOptions)
    .then(handleResponse)
    .catch(handleError);
}

function del(studentId) {
  const requestOptions = {
    method: 'DELETE',
  };
  // `/api/students/${studentId}`
  return fetch(`${apiUrl}/students/${studentId}`, requestOptions)
    .then(handleResponse)
    .catch(handleError);
}

const students = {
  getAll,
  create,
  del,
};

export default students;
