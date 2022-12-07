import React, { useContext } from 'react'
import Card from '../Components/Card'
import { CardContainer } from '../Components/styledComponents'
import { ContextGlobal } from "../Components/utils/global.context"
import { H1Section } from "../Components/styledComponents.js"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { data } = useContext(ContextGlobal);

  return (
    <main>
      <H1Section>Home</H1Section>
      <CardContainer >
        {/* Aqui deberias renderizar las cards */}
        {data.map(doc => (
          <Card key={doc.id} name={doc.name} username={doc.username} id={doc.id} />
        ))}
      </CardContainer>
    </main>
  )
}

export default Home