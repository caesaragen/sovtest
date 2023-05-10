import React from "react";
import { Card, CardContent, CardText, CardTitle, CardLink, Button, Container } from "./cardStyles";
import { Person } from "../../__generated__/graphql";


interface CardProps extends Person {
    handleClick?: () => void;
    onBackClick?: () => void;
    showBackButton?: boolean;
}

const PersonCard: React.FC<CardProps> = ({
    name,
    height,
    mass,
    gender,
    homeworld,
    handleClick,
    showBackButton = false,
    onBackClick,
}) => {


    return (
        <Container>
            {showBackButton && (
                <Button onClick={onBackClick} style={{ marginBottom: "10px" }}>
                    &#x2190; Back to People
                </Button>
            )}
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
        </Container>
    );
};

export default PersonCard;
