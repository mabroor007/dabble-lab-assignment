const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    populations: [Population]
    getOnePopulation(country: String!, year: String!): PopulationResult
  }

  type Mutation {
    addNewPopulation(
      country: String!
      year: String!
      area: Int!
      totalPopulation: Int!
    ): Population!
    deletePopulation(country: String!, year: String!): DeletePopulationResult
  }

  # main entity
  type Population {
    country: String!
    year: String!
    area: Int!
    totalPopulation: Int!
  }

  # result types for mutations
  type Success {
    message: String!
  }
  type Error {
    reason: String!
  }
  union PopulationResult = Population | Error
  union DeletePopulationResult = Success | Error
`;
