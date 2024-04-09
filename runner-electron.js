const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = process.env.TARGER_TOKEN_ELECTRON,
cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
