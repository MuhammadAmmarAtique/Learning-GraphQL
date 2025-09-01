import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
// To integrate apolloServer/GraphQl Server with express this library is used (as-integrations/express5)
import { expressMiddleware } from "@as-integrations/express5";
import { graphQLSchema } from "./graphql/schema/schema";
import { graphQLResolver } from "./graphql/resolvers/resolvers";
import { connectDB } from "./database/db";
import express from "express";
import cors from "cors";

dotenv.config({ path: "./.env" });

const port = Number(process.env.PORT);
const MongodbURI = String(process.env.MONGO_URI);

const app = express();

// Regular Express route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function startServer() {
  try {
    // Step 1: Connect to database FIRST
    await connectDB(MongodbURI);

    // Step 2: Create and start Apollo Server
    const server = new ApolloServer({
      typeDefs: graphQLSchema,
      resolvers: graphQLResolver,
    });

    await server.start();
    console.log("Apollo Server started");

    // Step 3: Apply GraphQL middleware
    app.use(
      "/graphql",
      cors(),
      express.json(),
      expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
      })
    );

    // Step 4: Start Express server
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
      console.log(`GraphQL endpoint: http://localhost:${port}/graphql`);
    });

  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

// Start the server
startServer();