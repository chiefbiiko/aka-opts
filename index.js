function dealias (options, conf) {
  return Object.keys(conf).reduce(function (opts, ogkey) {
    if (!opts.hasOwnProperty(ogkey)) {
      var alias = conf[ogkey].find(function (aka) {
        return opts.hasOwnProperty(aka)
      })
      if (alias) opts[ogkey] = opts[alias]
    }
    conf[ogkey].forEach(function (aka) {
      return delete opts[aka]
    })
    return opts
  }, Object.assign({}, options))
}

module.exports = dealias
