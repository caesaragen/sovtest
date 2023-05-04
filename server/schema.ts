
import gql from 'graphql-tag';

const typeDefs = gql`
  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  type PeopleResult {
    count: Int
    next: String
    previous: String
    results: [Person]
  }

  type Query {
    allPeople(page: Int): PeopleResult
    getPerson(name: String!): Person
  }
`;

export default typeDefs;