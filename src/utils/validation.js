export const validateData = (email, password, fullname) => {
  const isEmailvalid =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordvalid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
      password
    );
  const isFullname = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
  if (!isEmailvalid) return "enter the correct email";
  if (!isPasswordvalid) return "enter the correct password";
  if (!isFullname) return "enter the valid name";
  return null;
};
