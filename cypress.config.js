const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    env: {
      email: 'irdtak5@gmail.com',
      passw: 'Fir123456'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    defaultCommandTimeout: 5432,
    viewportHeight: 670,
    viewportWidth: 1010,
  },
});
