var
    exec = require('child_process').exec
    , assert = require('assert')
    , handle
;

describe('the binary', function() {

    it('requires the file', function(done) {

        handle = exec(
            __dirname + '/../bin/tail-stream'
            , { timeout : 1000 }
            , results
        );
        function results(err) {

            assert(err);
            done();
        };
    });
});