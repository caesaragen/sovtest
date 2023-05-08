import React, {useContext, useEffect} from "react";
import { Card, CardContent, CardText, CardTitle, CardLink } from "./cardStyles";
import { Person } from "../../__generated__/graphql";
import { useNavigate} from "react-router-dom";
import { PersonContext } from "../../context/PersonContext";

interface CardProps extends Person {
    handleClick: () => void;
}

const PersonCard: React.FC<CardProps> = ({
    name,
    height,
    mass,
    gender,
    homeworld,
    handleClick,
}) => {
    // const navigate = useNavigate();
    // const { selectedPerson, setSelectedPerson } = useContext(PersonContext);





    

    return (
        <CardLink to={`/person/${name}`} onClick={handleClick}>
        <Card onClick={handleClick}>
            <CardContent>
                <CardTitle>{name}</CardTitle>
                <CardText>Height: {height}</CardText>
                <CardText>Mass: {mass}</CardText>
                <CardText>Gender: {gender}</CardText>
                <CardText>Homeworld: {homeworld}</CardText>
            </CardContent>
        </Card>
        </CardLink>
    );
};

export default PersonCard;
