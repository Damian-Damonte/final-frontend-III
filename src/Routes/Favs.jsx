import React, { useContext } from "react";
import { BtnRemoveAll, FavContainer, PFavs, CardContainer, H1Section } from "../Components/styledComponents";
import { DentistsContext } from "../contexts/dentists.contexts";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
// este componente debe consumir los destacados del localStorage
// Deberan renderizar una Card por cada uno de ellos

const Favs = () => {
  const { dentists: { favs }, dispatch } = useContext(DentistsContext);

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
