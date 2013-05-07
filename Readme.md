# Log Stream

Stream a tail -f to the browser.

## Example
### Server
```shell
# Spin up logger service monitoring /some/log/file.log on port 9090
./bin/logger -f /some/log/file.log -p 9090
```

### Client

```js
var logger = require('../client')({
  url: 'http://localhost:9090/logs',
  el: document.querySelector('#logs')
})
```

## Building 
```shell
make # built files in ./build/build.js
```

## Running Tests

```shell
make test
```
