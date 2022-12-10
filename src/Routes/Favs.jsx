import React, { useContext, useEffect } from "react";
import { BtnRemoveAll, FavContainer, PFavs, CardContainer, H1Section} from "../Components/styledComponents";
import { DentistsContext } from "../contexts/dentists.contexts";
import Card from "../Components/Card";

const Favs = () => {
  const { dentists: { favs }, dispatch } = useContext(DentistsContext);

  useEffect(() => {
    dispatch({
      type:"setFavs",
      payload: localStorage.favs ? JSON.parse(localStorage.favs) : []})
  }, [dispatch]);

  return (
    <FavContainer>
      <H1Section>Dentists Favs</H1Section>
      <CardContainer>
        {favs.map((dentist) => (
          <Card
            key={dentist.id}
            dentist={dentist}
            dispatch={dispatch}
            isFav={true}
          />
        ))}
      </CardContainer>
      {favs.length ? (
        <BtnRemoveAll onClick={() => dispatch({ type: "removeAll" })}>
          Remove all
        </BtnRemoveAll>
      ) : (
        <PFavs>No favorite dentists</PFavs>
      )}
    </FavContainer>
  );
};

export default Favs;
