# url-resolve
resolve multiple url segments like path.resolve

## usage
```js
var urlResolve = require('url-resolve')
urlResolve('http://a','b','c','d')
// => http://a/b/c/d
```

## api

`url.resolve(from, [to ...])#`

see also https://nodejs.org/api/url.html#url_url_resolve_from_to


## installation

    $ npm install url-resolve


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXV jden <jason@denizac.org>. See LICENSE.md
