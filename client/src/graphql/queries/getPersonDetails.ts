import {  gql } from '@apollo/client';

export const GET_PERSON = gql(`
query GetPerson($name: String!) {
    getPerson(name: $name) {
      name
      gender
      height
      mass
      homeworld
    }
  }
`);