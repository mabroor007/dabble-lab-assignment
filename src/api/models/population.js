const { Schema, model } = require("mongoose");

const populationSchema = new Schema({
  country: { type: String, required: true },
  year: { type: String, required: true },
  totalPopulation: { type: Number, required: true },
  area: { type: Number, required: true },
});

const Population = model("population", populationSchema);

module.exports = Population;
