const createAuthHeaders = token => {
  return new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  });
};

const createGuestHeaders = () => {
  return new Headers({
    "Content-Type": "application/json"
  });
};

export function apiCallToCreateStory(data, token) {
  return fetch("http://127.0.0.1:3009/api/v1/stories/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: createAuthHeaders(token)
  }).then(res => res.json());
}

export function apiCallToUpdateStory(data, token) {
  return fetch(`http://127.0.0.1:3009/api/v1/stories/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: createAuthHeaders(token)
  }).then(res => res.json());
}

export function apiCallToDeleteStory(id, token) {
  return fetch(`http://127.0.0.1:3009/api/v1/stories/${id}`, {
    method: "DELETE",
    headers: createAuthHeaders(token)
  });
}

export function apiCallToAuthenticateUser(data) {
  return fetch("http://127.0.0.1:3009/api/v1/auth/sign_in", {
    method: "POST",
    body: JSON.stringify(data),
    headers: createGuestHeaders()
  }).then(res => res.json());
}

export function apiCallToRegisterUser(data) {
  return fetch("http://127.0.0.1:3009/api/v1/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: createGuestHeaders()
  }).then(res => res.json());
}
