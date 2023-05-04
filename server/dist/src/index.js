import { ApolloServer } from '@apollo/server';
// const ApolloServer = require('@apollo/server');
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from '../schema';
import resolvers from '../resolvers';
import StarWarsAPI from './datasources/starwars-api';
const server = new ApolloServer({
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
