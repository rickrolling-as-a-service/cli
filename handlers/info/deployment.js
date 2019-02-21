const raas = require('raas-api')
const display = require('../../lib/display')
const chalk = require('chalk')

module.exports = async (conf, args) => {
  const key = conf.get('key')
  if (!key) {
    display.error('Please log in first')
  }
  raas.key.set(key)

  const code = args[0] || conf.get('lastDeployment')
  if (!code) display.error('You must specify a deployment code')
  display.log(`Code is ${code}`)

  let info
  try {
    info = await raas.deployments.getInfo(code)
  } catch(error) {
    display.error('Couldn\'t get info on deployment', error)
  }

  console.log(`
${chalk.bold('Deployment uri')}\t${chalk.grey(info.uri)}
${chalk.bold('Meme index')}\t${chalk.grey(info.memeIndex)}
${chalk.bold('Meme name')}\t${chalk.grey(info.memeName)}
${chalk.bold('Meme uri')}\t${chalk.grey(info.memeUri)}
${chalk.bold(
  info.views ? info.views === 1 ? 'One person has' : `${info.views} people have` : 'Nobody has'
)} viewed it
  `.trim())
}