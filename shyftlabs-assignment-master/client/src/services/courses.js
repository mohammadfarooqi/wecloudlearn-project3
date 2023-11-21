import { handleResponse, handleError } from '../utils';

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

function getAll() {
  // `/api/courses`
  return fetch(`${apiUrl}/courses`).then(handleResponse).catch(handleError);
}

function create(course) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(course),
  };
  // '/api/courses'
  return fetch(`${apiUrl}/courses`, requestOptions)
    .then(handleResponse)
    .catch(handleError);
}

function del(courseId) {
  const requestOptions = {
    method: 'DELETE',
  };
  // `/api/courses/${courseId}`
  return fetch(`${apiUrl}/courses/${courseId}`, requestOptions)
    .then(handleResponse)
    .catch(handleError);
}

const courses = {
  getAll,
  create,
  del,
};

export default courses;
