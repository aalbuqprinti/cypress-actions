const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = process.env.TARGER_TOKEN_FIREFOX,
cypress.run({
  browser: 'firefox'
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
