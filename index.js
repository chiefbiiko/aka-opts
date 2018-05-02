function dealias (options, conf) {
  return Object.keys(conf).reduce(function (opts, conf_key) {
    if (!opts.hasOwnProperty(conf_key)) {
      var alias = conf[conf_key].find(function (aka) {
        return opts.hasOwnProperty(aka)
      })
      if (alias) opts[conf_key] = opts[alias]
    }
    conf[conf_key].forEach(function (aka) {
      return delete opts[aka]
    })
    return opts
  }, Object.assign({}, options))
}

module.exports = dealias
