import React, { useContext } from 'react';
import styled from 'styled-components';
import { PersonContext } from '../context/PersonContext';

interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background-color:  ${props => props.theme.colors.secondary};
  width: calc(100% - 0.75rem);
  border-radius: 0.5rem;
`;

const Detail = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.span`
  font-weight: bold;
`;

const PersonDetails: React.FC<Props> = () => {
  const { selectedPerson } = useContext(PersonContext);
  

  return (
    <Container>
      <h1>Person Details</h1>
      <Detail>
        <Label>Name:</Label> {selectedPerson.name}
      </Detail>
      <Detail>
        <Label>Gender:</Label> {selectedPerson.gender}
      </Detail>
      <Detail>
        <Label>Height:</Label> {selectedPerson.height}
      </Detail>
      <Detail>
        <Label>Mass:</Label> {selectedPerson.mass}
      </Detail>
      <Detail>
        <Label>Homeworld:</Label> {selectedPerson.homeworld}
      </Detail>
    </Container>
  );
};

export default PersonDetails;
