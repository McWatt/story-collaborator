export const setJwt = token => window.localStorage.setItem("jwt", token);
export const getJwt = () => window.localStorage.jwt;
export const clearJwt = () => window.localStorage.clear("jwt");
export const authString = () => `JWT ${getJwt()}`;
