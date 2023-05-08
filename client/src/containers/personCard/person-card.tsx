import React from "react";
import { Card, CardContent, CardText, CardTitle } from "./cardStyles";
import { Person } from "../../__generated__/graphql";


interface CardProps {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: string;
}

const PersonCard: React.FC<Person> = ({
    name,
    height,
    mass,
    gender,
    homeworld,
}) => {
    return (
        <Card>
            <CardContent>
                <CardTitle>{name}</CardTitle>
                <CardText>Height: {height}</CardText>
                <CardText>Mass: {mass}</CardText>
                <CardText>Gender: {gender}</CardText>
                <CardText>Homeworld: {homeworld}</CardText>
            </CardContent>
        </Card>
    );
};

export default PersonCard;
