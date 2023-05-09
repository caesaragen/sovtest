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

const Port = process.env.PORT || 4000
interface ContextValue {
    dataSources: {
        starWarsAPI: StarWarsAPI;
    };
}

const app = express();
const httpServer = http.createServer(app);
const corsOptions = {
    origin: ['https://studio.apollographql.com', "http://localhost:3000"],
    credentials: true,
};

app.use(cors(corsOptions));

const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
});

await server.start();

app.use(
    '/',
    cors<cors.CorsRequest>({ origin: ['https://sovtest-graphql.onrender.com', 'https://studio.apollographql.com', "http://localhost:3000"] , credentials: true, }),
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
  await new Promise<void>((resolve) => httpServer.listen({ port: Port }, resolve));
  console.log(`🚀 Server ready at ${Port}`);
