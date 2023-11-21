function createApiResponse(status, data, message, errors) {
  const response = {
    status,
    data,
  };
  if (message) {
    response.message = message;
  }
  if (errors) {
    response.errors = errors;
  }
  return response;
}

export default createApiResponse;
