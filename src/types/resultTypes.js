const DeletePopulationResult = {
  __resolveType(obj) {
    if (obj.reason) {
      return "Error";
    }
    if (obj.message) {
      return "Success";
    }
    return null;
  },
};

const PopulationResult = {
  __resolveType(obj) {
    if (obj.reason) {
      return "Error";
    }
    if (obj.totalPopulation) {
      return "Population";
    }
    return null;
  },
};

module.exports = { DeletePopulationResult, PopulationResult };
