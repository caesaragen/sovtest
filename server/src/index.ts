import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import typeDefs from './graphql/schema/schema.ts';
import resolvers from './graphql/resolvers/resolvers.ts';
import StarWarsAPI from './datasources/starwars-api.ts';

interface ContextValue {
    dataSources: {
        starWarsAPI: StarWarsAPI;
    };
}

const app = express();
const httpServer = http.createServer(app);
app.use(cors())
const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, {
        context: async () => {
            const { cache } = server;
            return {
    
                dataSources: {
                    starWarsAPI: new StarWarsAPI(),
                },
            };
        },
    }),
  );
  
  // Modified server startup
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/`);
