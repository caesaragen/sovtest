import React, { useContext } from 'react';
import { PersonContext } from '../../context/PersonContext';
import { useNavigate } from 'react-router-dom';
import { Container, Detail, Label, Button } from './personDetailsStyles';

interface Props {}


const PersonDetails: React.FC<Props> = () => {
  const { selectedPerson } = useContext(PersonContext);
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <Container>
      <h1>{`${selectedPerson.name}'s Details`}</h1>
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
      <Button onClick={handleBackButtonClick}>Go Back</Button>
    </Container>
  );
};

export default PersonDetails;
