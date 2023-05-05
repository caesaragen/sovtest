import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphql/schema/schema.ts';
import resolvers from './graphql/resolvers/resolvers.ts';
import StarWarsAPI from './datasources/starwars-api.ts';

interface ContextValue {
    dataSources: {
        starWarsAPI: StarWarsAPI;
    };
}

const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    context: async () => {
        const { cache } = server;
        return {

            dataSources: {
                starWarsAPI: new StarWarsAPI(),
            },
        };
    },
});

console.log(`🚀  Server ready at ${url}`);
