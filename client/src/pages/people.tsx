import React, { useState } from "react";
import PersonCard from "../containers/personCard/person-card";
import { mockdata } from '../data/mockdata';
import { CardContainer } from "../containers/personCard/cardStyles";


interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

const People: React.FC = () => {
  const [peopleData, setPeopleData] = useState(mockdata)

  return (
    <CardContainer>
      {
        peopleData.map((person: Person, index: number) => {
          return (
            <PersonCard
              key={index}
              name={person.name}
              height={person.height}
              mass={person.mass}
              gender={person.gender}
              homeworld={person.homeworld}
            />
          );
        })
      }
    </CardContainer>
  );
};

export default People;
