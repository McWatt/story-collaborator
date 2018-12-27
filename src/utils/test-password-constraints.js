export const testPasswordConstraints = password => {
  const numberTest = /[0-9]/;
  const specialCharacterTest = /[/\W/]/;
  const upperCaseTest = /[A-Z]/;
  const lowerCaseTest = /[a-z]/;
  const isLongEnough = password.length >= 8;

  const hasNumber = numberTest.test(password);
  const hasSpecialCharacter = specialCharacterTest.test(password);
  const hasUpperCaseLetter = upperCaseTest.test(password);
  const hasLowerCaseLetter = lowerCaseTest.test(password);

  const isValid =
    hasNumber &&
    hasSpecialCharacter &&
    hasUpperCaseLetter &&
    hasLowerCaseLetter &&
    isLongEnough;

  return {
    isValid,
    hasNumber,
    hasSpecialCharacter,
    hasLowerCaseLetter,
    hasUpperCaseLetter,
    isLongEnough
  };
};
