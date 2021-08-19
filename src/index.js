const mongoose = require("mongoose");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

// importing schema and resolvers from seprate files
const typeDefs = require("./types/typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

async function startApolloServer() {
  await server.start();

  const app = express();

  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

// first connect to db
mongoose.connect(
  // replace it with your own uri
  "************************",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (res) => {
    // if there is error return
    if (res !== null) return console.log(res);

    console.log(res, "Database up and running...");

    // once connection is established we start server
    startApolloServer();
  }
);
