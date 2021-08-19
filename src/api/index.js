const Population = require("./models/population");

const API = {
  getAllPopulations: () => {
    return Population.find();
  },
  getOnePopulation: (country, year) => {
    return Population.findOne({ country, year });
  },
  addNewPopulation: (data) => {
    const population = new Population(data);
    return population.save();
  },
  updatePopulation: async ({ country, year, totalPopulation, area }) => {
    const population = await Population.findOne({ country, year });
    if (!population) return "population not found";

    // updating
    return Population.updateOne(
      { country, year },
      { country, year, totalPopulation, area }
    );
  },
  deletePopulation: async (country, year) => {
    const population = await Population.findOne({ country, year });
    if (!population) return "population not found";
    return Population.deleteOne({ country, year });
  },
};

module.exports = API;
