const API_URL = "http://localhost:4000";

export const getUsers = () => {
  return fetch(`${API_URL}/user`).then(response => response.json());
};

export const searchUsers = query => {
  return fetch(`${API_URL}/user/search?text=${query}`).then(response =>
    response.json()
  );
};

export const userDetails = id => {
  return fetch(`${API_URL}/user/${id}`).then(response => response.json());
};
