import { gql } from '@apollo/client';

export const GET_PEOPLE = gql(`
query AllPeople($page: Int) {
  allPeople(page: $page) {
    count
    next
    previous
    results {
      gender
      height
      homeworld
      mass
      name
    }
  }
}
`);