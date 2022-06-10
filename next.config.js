const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "malang",
        mongodb_password: "freewolf",
        mongodb_clustername: "nextblog",
      },
    };
  }

  //* this env for production
  return {
    env: {
      mongodb_username: "malang",
      mongodb_password: "freewolf",
      mongodb_clustername: "nextblogProd",
    },
  };
};
