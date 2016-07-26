# interpolate-url

[![Build Status](https://travis-ci.org/supercrabtree/interpolate-url.svg?branch=master)](https://travis-ci.org/supercrabtree/interpolate-url)

Basic api to do url interpolation using colons as the delimiter.

```js
var interpolateUrl = require('interpolate-url');

var url = interpolateUrl('http://google.com/user/:id', {id: 10});

// url => http://google.com/user/10

var url = interpolateUrl('http://google.com/:type/:id', {type: 'car', id: 10});

// url => http://google.com/car/id
```

Also allows partial interpolation:

```js
var url = interpolateUrl('http://google.com/:type/:id', {id: 10});

// url => http://google.com/:type/id
```
