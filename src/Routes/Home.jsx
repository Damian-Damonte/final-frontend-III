import React, { useContext } from "react";
import { CardContainer } from "../Components/styledComponents";
import { H1Section } from "../Components/styledComponents.js";
import { DentistsContext } from "../contexts/dentists.contexts";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentists: { allDentists, favs }, dispatch } = useContext(DentistsContext);
  return (
    <main>
      <H1Section>Home</H1Section>
      <CardContainer>
        {/* Aqui deberias renderizar las cards */}
        {allDentists.map(dentist => (
          <Card
            key={dentist.id}
            dentist={dentist}
            dispatch={dispatch}
            isFav={favs.some(dent => dent.id === dentist.id)}
          />
        ))}
      </CardContainer>
    </main>
  );
};

export default Home;
