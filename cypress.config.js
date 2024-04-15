const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'd12g3r',
  e2e: {
    setupNodeEvents(on, config) {
      return config
      // implement node event listeners here
    },
    specPattern : "./cypress/test/**.*",
    //baseUrl : "https://lab.connect247.vn/ucrm-ver3"
  },
  // defaultCommandTimeout : 10000
});
