import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import { BtnRemoveAll, FavContainer, PFavs, CardContainer, H1Section } from "../Components/styledComponents";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState(JSON.parse(localStorage.favs));

  const removeAll = () => {
    localStorage.favs = JSON.stringify([]);
    setFavs([]);
  }

  const prueba =(id) => {
    const updateFavs = favs.filter(person => person.id !== id );
    setFavs(updateFavs);
    localStorage.favs = JSON.stringify(updateFavs);
  };

  return (
    <FavContainer>
      <H1Section>Dentists Favs</H1Section>
      <CardContainer>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favs.map((doc) => (
            <Card key={doc.id} {...doc} prueba={prueba} />
        ))}
      </CardContainer>
      {favs.length ?  <BtnRemoveAll onClick={removeAll}>Remove all</BtnRemoveAll> : <PFavs>No favorite dentists</PFavs>}
    </FavContainer>
  );
};

export default Favs;
