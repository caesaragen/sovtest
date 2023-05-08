import { createContext } from "react";
import { Person } from "../__generated__/graphql";

interface PersonContextType {
  selectedPerson: Person;
  setSelectedPerson: (person: Person) => void;
}

export const defaultPerson: Person = {
  name: "",
  gender: "",
  height: "",
  mass: "",
  homeworld: "",
};

export const PersonContext = createContext<PersonContextType>({
  selectedPerson: defaultPerson,
  setSelectedPerson: () => {},
});
