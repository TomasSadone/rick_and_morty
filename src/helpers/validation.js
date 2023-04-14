const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexNumber = /\d/;

const validation = ({ email, password }, event) => {
  const errors = {};

  //email errors
  if (event.target.name === 'email') {
    if (!email.length) errors.email = 'Debes ingresar un nombre de usuario';
    if (email.length > 35)
      errors.email = 'El nombre de usuario no puede tener mas de 35 caracteres';
    if (!regexEmail.test(email))
      errors.email = 'El nombre de usuario debe ser un correo electrónico';
  }
  //password errors
  if (event.target.name === 'password') {
    if (!regexNumber.test(password))
      errors.password = 'La contraseña debe incluir al menos un número';
    if (password.length < 6 || password.length > 10)
      errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
  }
  return errors;
};

export default validation;
