export const USER_UPDATE_NAME_AND_EMAIL = "USER_UPDATE_NAME_AND_EMAIL";
export const USER_RESET = "USER_RESET";

export const userUpdateNameAndEmail = (name, email, userId) => {
  return {
    type: USER_UPDATE_NAME_AND_EMAIL,
    payload: { name, email, userId }
  };
};

export const userReset = () => {
  return {
    type: USER_RESET
  };
};
