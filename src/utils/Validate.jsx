export const checkValidateData = (email, password) => {
  // const isNameValid = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/.test(name);
  const isEmailValid = /^[\w\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(password);

  // if (!isNameValid) return "Invalid username";
  if (!isEmailValid) return "*Email ID is not Valid";
  if (!isPasswordValid) return "*Password is not valid";

  return null;
};
