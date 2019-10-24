const req = require('request')
require('dotenv').config()

module.exports = function (context, cb) {
  const key = context.query.key

  var options = {
    url: `https://api.figma.com/v1/images/${key}?ids=0:1&format=svg`,
    headers: {
      'X-Figma-Token': process.env.FIGMA_TOKEN
    }
  }

  req(options, (error, response, body) => {
    if (error) throw error

    var data = JSON.parse(body)
    var url = data.images['0:1']

    req(url, (error, response, body) => {
      if (error) throw error

      cb(null, body)
    })
  })
}
