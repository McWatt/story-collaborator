export const isAuthenticated = store => {
  return store.authentication.status === "authenticated";
};
