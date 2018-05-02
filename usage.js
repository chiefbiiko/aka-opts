var dealias = require('.')

var opts = { frd: 36, zoo: 99, z: 9 }
var conf = { fraud: [ 'f', 'frd' ], zoo: [ 'z' ]  }

opts = dealias(opts, conf)

console.log(opts)
// -> { fraud: 36, zoo: 99 }
