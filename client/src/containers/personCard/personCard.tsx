import React from "react";
import { Card, CardContent, CardText, CardTitle, CardLink } from "./cardStyles";
import { Person } from "../../__generated__/graphql";

interface CardProps extends Person {
    handleClick?: () => void;
}

const PersonCard: React.FC<CardProps> = ({
    name,
    height,
    mass,
    gender,
    homeworld,
    handleClick,
}) => {



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
