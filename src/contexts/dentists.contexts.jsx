import { createContext, useReducer } from "react";
import { Outlet } from "react-router-dom";

export const DentistsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "setAllDentistsAndFavs":
      return action.payload;

    case "setFavs":
      return {...state, favs: action.payload};

    case "handleFav":
      const newStorage = action.payload.isFav
        ? state.favs.filter(dentist => dentist.id !== action.payload.dentist.id)
        : [...state.favs, action.payload.dentist];
      localStorage.favs = JSON.stringify(newStorage);
      return {...state, favs: newStorage}

    case "removeAll":
      localStorage.favs = JSON.stringify([]);
      return {...state, favs: []};

    default:
      return state;
  }
};

const DentistsContextProvider = () => {
  const [dentists, dispatch] = useReducer(reducer, {allDentists: [], favs: []});

  return (
    <DentistsContext.Provider value={{dentists, dispatch}}>
      <Outlet />
    </DentistsContext.Provider>
  );
};

export default DentistsContextProvider;
