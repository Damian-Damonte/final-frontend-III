export const validations = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.name) {
    errors.name = "El campo name no puede estár vacio";
  } else if (form.name.length < 5){
    errors.name = "Este campo debe contener al menos 5 caracteres";
  } else if (!regexName.test(form.name)) {
    errors.name = "Este campo solo acepta letras y espacios en blanco";
  }

  if (!form.email) {
    errors.email = "El campo email no puede estár vacio";
  } else if (!regexEmail.test(form.email)) {
    errors.email = "Formato de email incorrecto";
  }

  return errors;
};