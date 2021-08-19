const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

// importing schema and resolvers from seprate files
const typeDefs = require("./types/typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers, trace: false });

// first connect to db
mongoose.connect(
  // replace it with your own uri
  "****************************",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (res) => {
    // if there is error return
    if (res !== null) return console.log(res);

    console.log(res, "Database up and running...");

    // once connection is established we start server
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  }
);
