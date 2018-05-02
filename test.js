var tape = require('tape')
var dealias = require('./index')

tape('replaces', function (t) {
  var opts = { frd: 36, z: 99 }
  var conf = { fraud: [ 'f', 'frd' ] }
  t.same(dealias(opts, conf), { fraud: 36, z: 99 }, 'replaced')
  t.end()
})

tape('deletes', function (t) {
  var opts = { frd: 36, zoo: 99, z: 9 }
  var conf = { fraud: [ 'f', 'frd' ], zoo: [ 'z' ]  }
  t.same(dealias(opts, conf), { fraud: 36, zoo: 99 }, 'deleted')
  t.end()
})
