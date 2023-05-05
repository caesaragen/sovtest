import { IPerson, Result } from '../interfaces/IPerson';
import StarWarsAPI from '../../datasources/starwars-api';

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
            return new Promise<Result>((resolve, reject) => {
                dataSources.starWarsAPI.getPerson(name)
                    .then((response: any) => {
                        const person = response[0] || {};
                        console.log(person);
                        if (Object.keys(person).length === 0) {
                            reject(new Error(`Person with name ${name} not found`));
                        }
                        
                        resolve({
                            name: person.name,
                            height: person.height,
                            mass: person.mass,
                            gender: person.gender,
                            homeworld: person.homeworld,
                        });
                    })
                    .catch((error: Error) => {
                        console.error(error);
                        reject(error);
                    });
            });
        },
    },
};

export default resolvers;
