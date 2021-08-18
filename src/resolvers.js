const api = require("./api");
const {
  PopulationResult,
  DeletePopulationResult,
} = require("./types/resultTypes");

module.exports = {
  PopulationResult,
  DeletePopulationResult,

  Query: {
    populations: () => api.getAllPopulations(),
    getOnePopulation: async (_, { country, year }) => {
      const population = await api.getOnePopulation(country, year);
      // if failed to get get a population
      if (!population) {
        return {
          reason: "no entry for specified population was found in data",
        };
      }
      return population;
    },
  },

  Mutation: {
    addNewPopulation: (_, params) => {
      return api.addNewPopulation(params);
    },

    deletePopulation: async (_, { country, year }) => {
      const result = await api.deletePopulation(country, year);
      // first gettting the population to see if it exists
      if (result === "population was not found") {
        return {
          reason: "no entry for specified population was found in the data",
        };
      }
      return {
        message: "successfully deleted population",
      };
    },
  },
};
