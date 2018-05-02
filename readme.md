# aka-opts

[![build status](http://img.shields.io/travis/chiefbiiko/aka-opts.svg?style=flat)](http://travis-ci.org/chiefbiiko/aka-opts) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/aka-opts?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/aka-opts)

***

Dealias an `options` object. Tiny sugar topping that allows you to accept an `options` object full of aliases from your module users with `aka-opts` reducing that internally.
***

## Get it!

```
npm install --save aka-opts
```

***

## Usage

``` js
var dealias = require('aka-opts')

var opts = { frd: 36, zoo: 99, z: 9 }
var conf = { fraud: [ 'f', 'frd' ], zoo: [ 'z' ]  }

opts = dealias(opts, conf)

console.log(opts)
// -> { fraud: 36, zoo: 99 }
```

***

## API

### `dealias(options, conf)`

Dealias `options` according to the mappings provided by `conf` which should look like:

``` js
{
  originalKey: [ 'aliasKeyA', 'aliasKeyB' ]
}
```

Aliases are considered if `options` does not have the original key. `dealias` uses the first alias value it finds on `options` for the original key. `dealias` does not mutate `options`. All alias properties are stripped off of the return object.

***

## License

[MIT](./license.md)
