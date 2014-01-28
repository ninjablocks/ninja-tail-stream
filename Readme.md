ninja-tail-stream
=================

Tail Dash F in a Stream

## Example
### Server
```shell
# Spin up logger service monitoring /some/log/file.log on port 9090
./bin/tail-stream -f /some/log/file.log -p 9090
```

### Client

```js
var ts = require('../client')({
  url: 'http://localhost:9090/logs',
  el: document.querySelector('#logs')
})
```

## Building 
```shell
make # built files live in ./build/build.js
```

## Running Tests

```shell
make test
```

## License
Copyright (c) 2013 Ninja Blocks
Licensed under the MIT license.
