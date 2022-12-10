import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TableDetails, ThField, ThValue , Tr, H1Section, DetailContainer } from "../Components/styledComponents.js"

const Detail = () => {
  const [dataDentis, setDataDentis] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(data => setDataDentis(data.data))
  }, [id]);

  const fields = ["name", "email", "phone", "website"];

  return (
    <DetailContainer>
      <H1Section>Detail Dentist { id } </H1Section>
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
    </DetailContainer>
  )
}

export default Detail