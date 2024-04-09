const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjkzYzE4NWExLTViMWMtNGY3MS05ODA1LTQ1MjljOTNiNDJkZS0xNzEyNjgwOTI3MTY3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYzU0YWVhNWEtZmY5Yy00YmQ0LTk5NjYtNmRmYmRhZmU2MWEyIiwidHlwZSI6InQifQ.M6lE7qbr8zQg8oHpFdEOpRu-3shWqToXKCoHld4xLi0'
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
