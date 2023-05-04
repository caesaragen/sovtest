import { IPerson, Result } from './src/interfaces/IPerson';
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
        getPerson: async (_: any, { name }: { name: string }, { dataSources }: { dataSources: { starWarsAPI: StarWarsAPI } }): Promise<Result> => {
            try {
                const response = await dataSources.starWarsAPI.getPerson(name);
                const person = response[0] || {}; 
                console.log(person);
                return {
                    name: person.name,
                    height: person.height,
                    mass: person.mass,
                    gender: person.gender,
                    homeworld: person.homeworld,
                };
            } catch (error) {
                console.error(error);
                throw error;
            }
        }

    }

};

export default resolvers;
