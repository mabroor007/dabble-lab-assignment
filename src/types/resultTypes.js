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
    if (obj.year) {
      return "Population";
    }
    return null;
  },
};

module.exports = {
  // Since they both return Success or Error
  // we dont need to create seprate typeResolvers
  UpdatePopulationResult: DeletePopulationResult,
  DeletePopulationResult,
  PopulationResult,
};
