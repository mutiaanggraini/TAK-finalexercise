const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    defaultCommandTimeout: 5432,
    viewportHeight: 670,
    viewportWidth: 1010,
  },
});
