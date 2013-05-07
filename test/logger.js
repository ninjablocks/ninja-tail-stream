var assert = require('assert')

describe('logger', function() {
  var result, logger

  beforeEach(function() {
    result = document.createElement('div')
    logger = require('../client')({
      url: 'http://localhost:9090/logs',
      el: result
    })
    document.body.appendChild(result)
  })
  afterEach(function() {
    document.body.removeChild(result)
  })

  it('works', function(done) {
    var results = []
    logger.on('data', function onData(data) {
      results.push(Number(data))
      if (results.length > 3) {
        logger.removeListener('data', onData)
        results.reduce(function(previous, current) {
          if (!previous) return current
          assert.equal(previous + 1, current)
          return current
        }, undefined)
        done()
      }
    })
  })
})
