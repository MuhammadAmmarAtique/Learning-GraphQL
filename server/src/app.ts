import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { graphQLSchema } from "./graphql/schema/schema";
import { graphQLResolver } from "./graphql/resolvers/resolvers";
import { connectDB } from "./database/db";

dotenv.config({ path: "./.env" });

const port = Number(process.env.PORT) || 4444;
const MongodbURI = String(process.env.MONGO_URI);

const server = new ApolloServer({
  // 1) typeDefs: GraphQL schema definition (what data can be queried).
  typeDefs: graphQLSchema,
  // 2) resolvers: functions that tell Apollo what to return when a query is called.
  resolvers: graphQLResolver,
});

startStandaloneServer(server, {
  listen: {
    port,
  },
});

connectDB(MongodbURI);
