
const mr     = require('myth-request')
const assert = require('assert')

module.exports = km

// koa myth
// @param  {String} bundle
// @return {GeneratorFunction}
function km(bundle) {
  assert.equal(typeof bundle, 'object')

  const handler = mr(bundle.toString())

  // koa middleware. Sets body to
  // be a css string.
  return function *koaMyth(next) {
    handler(this.req, this.res, function(err, body) {
      if (err) this.throw(err)
      this.response.body = body
      this.response.type = 'css'
    }.bind(this))
  }
}
