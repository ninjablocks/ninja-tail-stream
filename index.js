"use strict"

var http = require('http')
var shoe = require('shoe');

var ecstatic = require('ecstatic')(__dirname + '/public');

var app = http.createServer(ecstatic);

var count = 0

module.exports = function(options, cb) {
  if (typeof options === 'function') cb = options, options = undefined
  options = options || {
    port: 8087
  }
  if (!options.file || typeof options.file !== 'string') return cb(new Error('file path required'))

var sf = require('slice-file');
var words = sf(options.file);
  var sock = shoe(function(stream) {
    words.follow(0).pipe(stream)
  })

  app.listen(options.port, cb)
  sock.install(app,  '/logs');

  return app
}


