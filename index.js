var resolve = require('url').resolve
var slice = Array.prototype.slice


function urlResolve (base) {
  var segs = slice.call(arguments, 1)

  return resolve(base, segs.join('/').replace(/\/+/g,'/'))

}

module.exports = urlResolve