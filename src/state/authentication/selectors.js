export const isAuthenticated = store => {
  return store.authentication.status === "authenticated";
};

export const authenticationGetStatus = state => state.authentication.status;
export const authenticationGetJwt = state => state.authentication.jwt;
