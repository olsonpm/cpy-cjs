const exportObj = require('fix-esm').require('cpy')

const cpy = exportObj.default

for (const [k, v] of Object.entries(exportObj)) {
  if (k === 'default') continue
  cpy[k] = v
}

module.exports = cpy
