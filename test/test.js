var mochi = require('mochi')

describe('url-resolve', function () {
  var urlResolve = require('../')
  var builtinResolve = require('url').resolve

  it('works the same as builtin url.resolve for two segments', function () {

    urlResolve('http://a','b')
    .should.equal(builtinResolve('http://a', 'b'))


    urlResolve('http://a','b/../c')
    .should.equal(builtinResolve('http://a', 'b/../c'))

  })

  it('can resolve multiple path segments', function () {
    urlResolve('http://a','b','c','d')
      .should.equal('http://a/b/c/d')
  })

  it('handles repeated path separaters', function () {
    urlResolve('http://a','b/','c/','d')
      .should.equal('http://a/b/c/d')
  })

})