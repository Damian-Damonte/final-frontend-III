import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Components/Form";

describe("Tests component Form", () => {

  test("Envio correcto del formulario", () => {
    const mockData = { name: "Rodrigo", email: "rodrigofernandez@gmail.com" };

    render(<Form />);

    const inputName = screen.getByPlaceholderText("Full name");
    const inputEmail = screen.getByPlaceholderText("Email");
    const btnSubmit = screen.getByText("Submit");

    userEvent.type(inputName, mockData.name);
    userEvent.type(inputEmail, mockData.email);
    fireEvent.click(btnSubmit);

    const alert = screen.getByText(
      `Gracias ${mockData.name}, te contactaremos cuando antes vía mail`
    );

    expect(alert).toBeInTheDocument();
  });

  test("Validacion caracteres incorrectos en input name  y formato de email incorrecto", () => {
    const mockData = { name: "Matias25%$", email: "rodrigofernandez" };

    render(<Form />);

    const inputName = screen.getByPlaceholderText("Full name");
    const inputEmail = screen.getByPlaceholderText("Email");
    const btnSubmit = screen.getByText("Submit");

    userEvent.type(inputName, mockData.name);
    userEvent.type(inputEmail, mockData.email);
    fireEvent.click(btnSubmit);

    const validacionName = screen.getByText("Este campo solo acepta letras y espacios en blanco");
    const validacionEmail = screen.getByText("Formato de email incorrecto");

    expect(validacionName).toBeInTheDocument();
    expect(validacionEmail).toBeInTheDocument();
  });

  test("Validacion de pocos caracteres en input name y email vacio", () => {
    const mockData = { name: "a", email: "" };

    render(<Form />);

    const inputName = screen.getByPlaceholderText("Full name");
    const inputEmail = screen.getByPlaceholderText("Email");
    const btnSubmit = screen.getByText("Submit");

    userEvent.type(inputName, mockData.name);
    userEvent.type(inputEmail, mockData.email);
    fireEvent.click(btnSubmit);

    const validacionName = screen.getByText("Este campo debe contener al menos 5 caracteres");
    const validacionEmail = screen.getByText("El campo email no puede estár vacio");

    expect(validacionName).toBeInTheDocument();
    expect(validacionEmail).toBeInTheDocument();
  })
});
