const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = process.env.TARGER_TOKEN_CHROME,
cypress.run({
  browser: 'chrome'
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
