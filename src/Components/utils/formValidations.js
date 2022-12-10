export const validations = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.name) {
    errors.name = "This field can not be empty";
  } else if (form.name.length < 5){
    errors.name = "This field must contain at least 5 characters";
  } else if (!regexName.test(form.name)) {
    errors.name = "This field only accepts letters and blank spaces";
  }

  if (!form.email) {
    errors.email = "This field can not be empty";
  } else if (!regexEmail.test(form.email)) {
    errors.email = "Incorrect email format";
  }

  return errors;
};