"use strict"

var fs = require('fs')

var LOG_FILE = __dirname + '/fixtures/log.txt'
var ws = fs.createWriteStream(LOG_FILE)

var count = 0
// write to the log file
setInterval(function() {
  ws.write(++count + '\r\n')
}, 100)

// boot server under test
var server = require('../index')({
  file: LOG_FILE
}).listen(9090)

// host test/build files
var ecstatic = require('ecstatic');
var http = require('http');

var testServer = http.createServer(
  ecstatic({ root: __dirname + '/../' })
)

testServer.listen(9091);
