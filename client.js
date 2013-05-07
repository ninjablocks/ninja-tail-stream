"use strict"

var shoe = require('shoe')
var through = require('through');

module.exports = function(options) {
  options = options || {}
  var el = options.el || document.querySelector('#log')
  var url = options.url || '/logs'
  var stream = shoe(url)

  stream.pipe(through(function(msg) {
    el.appendChild(document.createTextNode(msg));
    return msg;
  }));
  return stream
}
