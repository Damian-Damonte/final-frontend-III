import React from 'react'
import Form from '../Components/Form'
import { ContactContainer, ContacTitle, ContacSubtitle } from '../Components/styledComponents'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <ContactContainer>
      <ContacTitle style={{margin:"0"}}>Want to know more?</ContacTitle>
      <ContacSubtitle>Send us your questions and we will contact you</ContacSubtitle>
      <Form/>
    </ContactContainer>
  )
}

export default Contact