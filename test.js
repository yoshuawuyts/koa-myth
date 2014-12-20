const st     = require('servertest')
const rework = require('rework')
const http   = require('http')
const myth   = require('myth')
const test   = require('tape')
const koa    = require('koa')
const fs     = require('fs')
const km     = require('./')

test('', function(t) {
  const app    = koa()

  const css    = fs.readFileSync('test/index.css', 'utf8')
  const bundle = rework(css).use(myth())
  app.use(km(bundle))

  const server = http.createServer(app.callback())
  st(server, '/', { encoding: 'utf8' }, function(err, res) {
    t.ifError(err, 'no error')
    t.equal(res.statusCode, 200, 'status')
    t.ok(res, 'server res')
    t.equal(res.body, '.foo {\n  color: blue;\n}', 'correct body content')
    server.close()
    t.end()
  })
})
