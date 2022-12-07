import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import doctor from "../images/doctor.jpg"
import { DentistCard, ImgCard, BtnFav } from "./styledComponents";

const reducer = (state, action) => {
  switch(action.type){
    case "setFav":
      return action.payload;
    case "addFav":
      const storage = localStorage.favs ? JSON.parse(localStorage.favs) : [];
      const newStorage = state 
        ? storage.filter(doc => doc.id !== action.payload.id)
        : [...storage, action.payload] ;
      localStorage.favs = JSON.stringify(newStorage);
      console.log("card");
      return !state
    default:
      return state;
  }
}

const Card = ({ name, username, id, prueba }) => {
  const [ fav, dispatch ] = useReducer(reducer, null);


  useEffect(() => {
    const storage = localStorage?.favs && JSON.parse(localStorage.favs);
    storage
      ? (dispatch({type:"setFav", payload: storage.some(doc => doc.id === id)}))
      : (dispatch({type:"setFav", payload: false}));
  }, [id]);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type:"addFav", payload:{ name, username, id }});
    prueba && prueba(id);
  };

  return (
    <DentistCard >
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <ImgCard src={doctor} alt="Avatar doctor" />
      <Link to={`/details/${id}`}>
        <h3 style={{textAlign:"center"}}>{name}</h3>
      </Link>
      <p>{username}</p>
      <BtnFav onClick={addFav} fav={fav}>{fav ? "Remove Fav" : "Add Fav"}</BtnFav>
    </DentistCard>
  );
};

export default Card;
