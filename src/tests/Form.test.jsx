import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Components/Form";

describe("Tests component Form", () => {

  test("Envio correcto del formulario con nombre correspondiente", () => {
    const mockData = { name: "Rodrigo", email: "rodrigofernandez@gmail.com" };

    render(<Form />);

    const inputName = screen.getByPlaceholderText("Full name");
    const inputEmail = screen.getByPlaceholderText("Email");
    const btnSubmit = screen.getByText("Submit");

    userEvent.type(inputName, mockData.name);
    userEvent.type(inputEmail, mockData.email);
    fireEvent.click(btnSubmit);

    const alert = screen.getByText(
      `Thank you ${mockData.name}, we will contact you as soon as possible via email`
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

    const validacionName = screen.getByText("This field only accepts letters and blank spaces");
    const validacionEmail = screen.getByText("Incorrect email format");

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

    const validacionName = screen.getByText("This field must contain at least 5 characters");
    const validacionEmail = screen.getByText("This field can not be empty");

    expect(validacionName).toBeInTheDocument();
    expect(validacionEmail).toBeInTheDocument();
  })
});
