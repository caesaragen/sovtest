const resolvers = {
    Query: {
        allPeople: async (_, { page = 1 }, { dataSources }) => {
            const result = await dataSources.starWarsAPI.getAllPeople(page);
            return {
                count: result.count,
                next: result.next,
                previous: result.previous,
                results: result.results.map((person) => ({
                    name: person.name,
                    height: person.height,
                    mass: person.mass,
                    gender: person.gender,
                    homeworld: person.homeworld,
                })),
            };
        },
        getPerson: async (_, { name }, { dataSources }) => {
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
