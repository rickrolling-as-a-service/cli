const raas = require('raas-api')
const display = require('../lib/display')

module.exports = async (conf, args) => {
  const key = conf.get('key')
  if (!key) {
    display.error('Please log in first')
  }
  raas.key.set(key)

  let code
  let alias
  if (args.length > 1) {
    code = args[0]
    alias = args[1]
  } else {
    const latestCode = conf.get('lastDeployment')
    if (!latestCode) {
      display.error('You must specify a deployment code')
    }
    code = latestCode
    alias = args[0]
  }
  if (!alias) display.error('You must specify an alias')

  display.log(`Code is ${code}`)
  display.log(`Alias is ${alias}`)

  let createdAlias
  try {
    createdAlias = await raas.aliases.alias(code, alias)
  } catch(error) {
    display.error('Error aliasing deployment', error)
  }

  display.success(`Alias available at ${createdAlias.uri}`)
}