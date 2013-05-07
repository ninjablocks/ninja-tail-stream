build: client.js
	-@mkdir build
	`npm bin`/browserify ./client.js > build/build.js

build-test: client.js
	-@mkdir build
	`npm bin`/browserify ./test/logger.js -r assert -r ./client.js > build/build.js

test: build-test
	@node test/server.js&
	@`npm bin`/mocha-phantomjs http://localhost:9091/test/tests.html; RC=$$?; pkill -f node test/server.js; exit $$RC


.PHONY: test build-test
