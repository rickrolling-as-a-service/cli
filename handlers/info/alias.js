const raas = require('raas-api')
const display = require('../../lib/display')
const chalk = require('chalk')

module.exports = async (conf, args) => {
  const key = conf.get('key')
  if (!key) {
    display.error('Please log in first')
  }
  raas.key.set(key)

  const alias = args[0] || conf.get('lastAlias')
  if (!alias) display.error('You must specify an alias')
  display.log(`Alias is ${alias}`)

  let info
  try {
    info = await raas.aliases.getInfo(alias)
  } catch(error) {
    display.error('Couldn\'t get info on alias', error)
  }

  console.log(`
${chalk.bold('Alias uri')}\t${chalk.grey(info.uri)}
${chalk.bold('Deployment code')}\t${chalk.grey(info.code)}
  `.trim())
}