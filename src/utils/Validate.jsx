export const checkValidateData = (email, password) => {
  const isEmailValid = /^[\w\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(password);

  if (!isEmailValid) return "*Email ID is not Valid";
  if (!isPasswordValid) return "*Password is not valid";

  return null;
};
