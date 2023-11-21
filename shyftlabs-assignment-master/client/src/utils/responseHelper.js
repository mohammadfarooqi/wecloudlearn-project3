export function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

export function handleError(error) {
  console.error('API error:', error);
  throw error;
}