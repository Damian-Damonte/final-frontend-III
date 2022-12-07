import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TableDetails, ThField, ThValue , Tr, H1Section } from "../Components/styledComponents.js"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dataDentis, setDataDentis] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(data => setDataDentis(data.data))
  }, [id]);

  const fields = ["name", "email", "phone", "website"];

  return (
    <>
      <H1Section>Detail Dentist { id } </H1Section>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <TableDetails>
        <tbody>
          {fields.map(field => (
            <Tr key={field}>
              <ThField>{field}</ThField>
              <ThValue>{dataDentis[field]}</ThValue>
            </Tr>
          ))}
        </tbody>
      </TableDetails>
    </>
  )
}

export default Detail