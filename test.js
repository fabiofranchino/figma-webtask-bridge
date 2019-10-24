const task = require('./index.js')

var wtquery = { query: { key: 'IHKVkya3fjZVGHxSnm2ioRXl' } }

task(wtquery, (a, b) => {
  console.log(b)
})
