import React, { useState, createContext } from 'react'
import { Person } from '../__generated__/graphql';
// interface Person {
//     name: string;
//     height: string;
//     mass: string;
//     gender: string;
//     homeworld: string;
//   }
  interface PersonContextType {
    selectedPerson: Person;
    setSelectedPerson: (person: Person) => void;
  }
  
 export const defaultPerson: Person = {
    name: "",
    gender: "",
    height: "",
    mass: "",
    homeworld: ""
  };
  
  export const PersonContext = createContext<PersonContextType>({
    selectedPerson: defaultPerson,
    setSelectedPerson: () => {},
  });