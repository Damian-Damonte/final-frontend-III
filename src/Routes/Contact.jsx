import React from 'react'
import Form from '../Components/Form'
import { ContactContainer, ContacTitle, ContacSubtitle } from '../Components/styledComponents'

const Contact = () => {
  return (
    <ContactContainer>
      <ContacTitle >Want to know more?</ContacTitle>
      <ContacSubtitle>Send us your questions and we will contact you</ContacSubtitle>
      <Form/>
    </ContactContainer>
  )
}

export default Contact