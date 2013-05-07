build: client.js
	-@mkdir build
	browserify ./client.js > build/build.js

build-test: client.js
	-@mkdir build
	browserify ./test/logger.js -r assert -r ./client.js > build/build.js

test: build-test
	@node test/server.js&
	@mocha-phantomjs http://localhost:9091/test/tests.html; RC=$$?; pkill -f node test/server.js; exit $$RC


.PHONY: test build-test
