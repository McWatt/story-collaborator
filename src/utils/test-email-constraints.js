export const testEmailConstraints = email => {
  const atTest = /[@]/;
  const isEmailLongEnough = email.length >= 5; // minimum possible email length (assumes only one character after dot)

  return isEmailLongEnough && atTest.test(email);
};
