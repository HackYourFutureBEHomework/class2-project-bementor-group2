const API_URL = 'http://localhost:4000';

export const getMentors = () => {
  return fetch(`${API_URL}/mentor`).then(response => response.json());
};
