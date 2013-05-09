"use strict"

var http = require('http')
var shoe = require('shoe');

var app = http.createServer()

module.exports = function(options, cb) {
  if (typeof options === 'function') cb = options, options = undefined
  if(typeof cb !== 'function') { cb = function(err) { if(err) { throw err; }}}
  options = options || {}
  if (!options.file || typeof options.file !== 'string') return cb(new Error('file path required'))

  var sf = require('slice-file');
  var words = sf(options.file);
  var sock = shoe(function(stream) {
    words.follow(0).pipe(stream)
  })

  sock.install(app,  '/logs');

  return app
}
