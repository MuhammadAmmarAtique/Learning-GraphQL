import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

dotenv.config({ path: "./.env" });

const port = Number(process.env.PORT) || 4444;

const server = new ApolloServer({
  // 1) typeDefs: GraphQL schema definition (what data can be queried).
  typeDefs: `#graphql
  type Query {
    hello: String,
    hello2: String
  }
`,
  // 2) resolvers: functions that tell Apollo what to return when a query is called.
  resolvers: {
    Query: {
      hello: () => "Hello world 1",
      hello2: () => "Hello world 2",
    },
  },
});

startStandaloneServer(server, {
  listen: {
    port,
  },
});
