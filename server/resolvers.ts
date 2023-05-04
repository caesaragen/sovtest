import { IPerson } from './src/interfaces/IPerson';
import StarWarsAPI from './src/datasources/starwars-api';

const resolvers = {
  Query: {
    allPeople: async (_: any, { page = 1 }: { page?: number }, { dataSources }: { dataSources: { starWarsAPI: StarWarsAPI } }): Promise<IPerson> => {
      const result = await dataSources.starWarsAPI.getAllPeople(page);
      return {
        count: result.count,
        next: result.next,
        previous: result.previous,
        results: result.results.map((person: any) => ({
          name: person.name,
          height: person.height,
          mass: person.mass,
          gender: person.gender,
          homeworld: person.homeworld,
        })),
      };
    },
    person: async (_: any, { name }: { name: string }, { dataSources }: { dataSources: { starWarsAPI: StarWarsAPI } }): Promise<IPerson> => {
      const person = await dataSources.starWarsAPI.getPerson(name);
      return {
        count: 1,
        next: null,
        previous: null,
        results: [{
          name: person.name,
          height: person.height,
          mass: person.mass,
          gender: person.gender,
          homeworld: person.homeworld,
        }],
      };
    },
  },
};

export default resolvers;
