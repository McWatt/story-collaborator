import { apiPath } from "../globals";

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

export function apiCallToGetUserStories(userId, token) {
  const headers = new Headers({
    Authorization: `Bearer ${token}`
  });

  return fetch(`${apiPath}/stories?userId=${userId}`, {
    method: "GET",
    headers
  }).then(res => res.json());
}

export function apiCallToGetStory(storyId, token) {
  return fetch(`${apiPath}/stories/${storyId}`, {
    method: "GET",
    headers: createAuthHeaders(token)
  }).then(res => res.json());
}

export function apiCallToCreateStory(data, token) {
  return fetch(`${apiPath}/stories/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: createAuthHeaders(token)
  }).then(res => res.json());
}

export function apiCallToUpdateStory(data, token) {
  return fetch(`${apiPath}/stories/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: createAuthHeaders(token)
  }).then(res => res.json());
}

export function apiCallToDeleteStory(id, token) {
  return fetch(`${apiPath}/stories/${id}`, {
    method: "DELETE",
    headers: createAuthHeaders(token)
  });
}

export function apiCallToAuthenticateUser(data) {
  return fetch(`${apiPath}/auth/sign_in`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: createGuestHeaders()
  }).then(res => res.json());
}

export function apiCallToRegisterUser(data) {
  return fetch(`${apiPath}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: createGuestHeaders()
  }).then(res => res.json());
}
