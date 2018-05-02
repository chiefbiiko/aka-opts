var tape = require('tape')
var dealias = require('./index')

tape('dealias', function (t) {
  var options = { frd: 36, z: 99 }
  var conf = { fraud: [ 'f', 'frd' ] }
  t.same(dealias(options, conf), { fraud: 36, z: 99 }, 'dealias')
  t.end()
})
