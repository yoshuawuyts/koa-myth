# koa-myth
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Wraps a [myth][myth] or [rework][rework] instance into a koa middleware.

## Installation
```bash
$ npm install koa-myth
```

## Usage
```js
const km     = require('koa-myth')
const rework = require('rework')
const http   = require('http')
const myth   = require('myth')
const koa    = require('koa')
const fs     = require('fs')

const port = process.env.port || 1337
const app  = koa()

const css    = fs.readFileSync('index.css', 'utf8')
const bundle = rework(css).use(myth())
app.use(km(bundle))

http.createServer(app.callback()).listen(port)
```

## See Also
- [myth-request](https://github.com/yoshuawuyts/myth-request)
- [koa-watchify](https://github.com/yoshuawuyts/koa-watchify)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/koa-myth.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-myth
[travis-image]: https://img.shields.io/travis/yoshuawuyts/koa-myth.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/koa-myth
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/koa-myth.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/koa-myth?branch=master
[downloads-image]: http://img.shields.io/npm/dm/koa-myth.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/koa-myth

[myth]: https://github.com/segmentio/myth
[rework]: https://github.com/reworkcss/rework
