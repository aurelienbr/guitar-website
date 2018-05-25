

const verifForm = (
  name,
  email,
  textarea
) => {
  let error = {};
  if (name.length === 0) {
    error.name = "Please enter your name";
  }
  if (name.length > 16) {
    error.name = "The name you wrotte is too long";
  }
  if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    error.email = "Please enter a valid email";
  }
  if (email.length === 0) {
    error.email = "Please enter your email";
  }
  if (!textarea) {
    error.textarea = "Please enter your message";
  }

  return error;
};

export default verifForm;
