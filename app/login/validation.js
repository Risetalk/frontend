const validation = (userData) => {
  let errors = {
    email: "no",
    password: "no",
  };

  if (!userData.email) {
    errors.email = "The email field is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
    errors.email = "Please enter a valid email";
  } else if (userData.email.length > 40) {
    errors.email = "The email cannot exceed 40 characters";
  }

  if (!userData.password) {
    errors.password = "The password field is required";
  } else if (userData.password.length <= 8) {
    errors.password = "The password must be more than 8 characters";
  } else if (!userData.password.match(/\d/)) {
    errors.password = "The password must contain at least one number";
  }

  return errors;
};

export default validation;
