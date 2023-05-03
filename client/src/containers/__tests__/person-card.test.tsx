import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PersonCard from "../personCard/person-card";

const mockPersonCardData = {
  "name": "Luke Skywalker", 
  "height": "172", 
  "mass": "77", 
  "gender": "male", 
  "homeworld": "https://swapi.dev/api/planets/1/",
}

describe('PersonCard', () => {
  it('should render person card with correct data', () => {
    render(<PersonCard {...mockPersonCardData} />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Height: 172')).toBeInTheDocument();
    expect(screen.getByText('Mass: 77')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
    expect(screen.getByText('Homeworld: https://swapi.dev/api/planets/1/')).toBeInTheDocument();
  });
});
