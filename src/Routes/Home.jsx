import React, { useContext, useEffect } from "react";
import { CardContainer } from "../Components/styledComponents";
import { H1Section } from "../Components/styledComponents.js";
import { DentistsContext } from "../contexts/dentists.contexts";
import Card from "../Components/Card";
import axios from "axios";

const Home = () => {
  const { dentists: { allDentists, favs }, dispatch } = useContext(DentistsContext);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then( data => {
      dispatch({
        type: "setAllDentistsAndFavs",
        payload: {
          allDentists: data.request.status === 200 ? data.data : [],
          favs: localStorage.favs ? JSON.parse(localStorage.favs) : [],
        },
      });
    });
  }, [dispatch]);

  return (
    <main>
      <H1Section>Home</H1Section>
        <CardContainer>
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
