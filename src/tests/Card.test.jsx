import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../Components/Card";
import { BrowserRouter } from "react-router-dom";

describe("Tests componente Card", () => {

  test("Name y username correcto", () => {
    const mockDentist = { id: 1, name: "Carlos", username: "carlos123" };
    const mockDispatch = jest.fn();
    const mockIsFav = false;

    render(
      <BrowserRouter>
        <Card dentist={mockDentist} dispatch={mockDispatch} isFav={mockIsFav} />
      </BrowserRouter>
    );

    const dentistsName = screen.getByText(mockDentist.name);
    const dentistUserName = screen.getByText(mockDentist.username);

    expect(dentistsName).toBeInTheDocument();
    expect(dentistUserName).toBeInTheDocument();
  });

  test("Ejecucion funcion pasada por props al dar clic en el btn addFav", () => {
    const mockDentist = { id: 1, name: "Carlos", username: "carlos123" };
    const mockDispatch = jest.fn();
    const mockIsFav = false;

    render(
      <BrowserRouter>
        <Card dentist={mockDentist} dispatch={mockDispatch} isFav={mockIsFav} />
      </BrowserRouter>
    );

    const btnAddFav = screen.getByText("Add Fav");
    fireEvent.click(btnAddFav);

    expect(mockDispatch).toBeCalled();
  });

  test("Cambio texto btn handleFav si el dentist es fav", () => {
    const mockDentist = { id: 1, name: "Carlos", username: "carlos123" };
    const mockDispatch = jest.fn();
    const mockIsFav = true;

    render(
      <BrowserRouter>
        <Card dentist={mockDentist} dispatch={mockDispatch} isFav={mockIsFav} />
      </BrowserRouter>
    );

    const btnRemoveFav = screen.getByText("Remove Fav");

    expect(btnRemoveFav).toBeInTheDocument();
  })
});
