const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    populations: [Population]
    # read
    getOnePopulation(country: String!, year: String!): PopulationResult
  }

  type Mutation {
    # create
    addNewPopulation(
      country: String!
      year: String!
      area: Int!
      totalPopulation: Int!
    ): Population!

    # update
    updatePopulation(
      country: String!
      year: String!
      area: Int!
      totalPopulation: Int!
    ): UpdatePopulationResult!

    # delete
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
  union UpdatePopulationResult = Success | Error
`;
