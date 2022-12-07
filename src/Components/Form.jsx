import React, { useState } from "react";
import {
  ContactForm,
  ContactInput,
  BtnSubmit,
  ErrorMsg,
  InputContainer,
} from "./styledComponents";
import TransitionAlerts from '../Components/Alert'


const initialForm = { name: "", email: "" };
const initialErrors = { name:"", email: "" };

const validations = (form) => {
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

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [sendForm, setSendForm] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validations(form);
    if (Object.keys(errors).length === 0) {
      console.log(form);
      setSendForm(form.name);
      setErrors(initialErrors);
      setForm(initialForm);
    } else setErrors(errors);
  };

  return (
    <ContactForm onSubmit={handleSubmit}>

      <InputContainer>
        <ContactInput
          placeholder="Full name"
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
      </InputContainer>

      <InputContainer>
        <ContactInput
          placeholder="Email"
          type="text"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
        {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
      </InputContainer>

      <BtnSubmit type="submit">Submit</BtnSubmit>
      <TransitionAlerts name={sendForm} setSendForm={setSendForm} />
    </ContactForm>
  );
};

export default Form;
