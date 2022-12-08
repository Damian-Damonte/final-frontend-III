import { Link } from "react-router-dom";
import doctor from "../images/doctor.jpg";
import { DentistCard, ImgCard, BtnFav } from "./styledComponents";

const Card = ({ dentist, dispatch, isFav }) => {
  const { id, name, username } = dentist;
  
  // En cada card deberan mostrar en name - username y el id
  // No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle
  // Ademas deberan integrar la logica para guardar cada Card en el localStorage

  return (
    <DentistCard>
      <ImgCard src={doctor} alt="Avatar doctor" />
      <Link to={`/details/${id}`}>
        <h3 style={{ textAlign: "center" }}>{name}</h3>
      </Link>
      <p>{username}</p>
      <BtnFav
        onClick={() => dispatch({ type: "handleFav", payload: { dentist: dentist, isFav } })}
        fav={isFav}
      >
        {isFav ? "Remove Fav" : "Add Fav"}
      </BtnFav>
    </DentistCard>
  );
};

export default Card;
