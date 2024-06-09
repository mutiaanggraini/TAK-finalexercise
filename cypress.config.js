const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    env: {
      envemail: 'mutia@gmail.com', //environment variable
      envpassw: 'KucingLucu123' //environment variable
    },
    defaultCommandTimeout: 5432,
    viewportHeight: 670,
    viewportWidth: 1010,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
