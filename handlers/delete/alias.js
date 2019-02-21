const raas = require('raas-api')
const display = require('../../lib/display')

module.exports = async (conf, args) => {
  const key = conf.get('key')
  if (!key) {
    display.error('Please log in first')
  }
  raas.key.set(key)

  const alias = args[0] || conf.get('lastAlias')
  if (!alias) display.error('You must specify an alias')
  display.log(`Alias is ${alias}`)

  let code
  try {
    code = await raas.aliases.delete(alias).code
  } catch(error) {
    display.error('Couldn\'t delete alias', error)
  }

  display.log(`Code was ${code}`)
  display.success('Alias deleted')
}