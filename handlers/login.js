const raas = require('raas-api')
const chalk = require('chalk')
const promptly = require('promptly')
const display = require('../lib/display')

module.exports = async (conf, args) => {
  if (args[0]) {
    display.log('Saving specified key')
    try {
      conf.set('key', args[0])
    } catch(error) {
      display.error('Couldn\'t save key', error)
    }
    display.success('You\'re now ready to run commands')
  }

  let username
  let password
  let key

  if (conf.get('key')) display.warning('It looks like you\'ve logged in already')

  try {
    username = await promptly.prompt(`${chalk.grey('>')} Enter your username: `)
  } catch(error) {
    console.log()
    display.error('Couldn\'t get username', error)
  }

  try {
    password = await promptly.password(`${chalk.grey('>')} Enter your password: `, {
      default: undefined
    })
  } catch(error) {
    console.log()
    display.error('Couldn\'t get password', error)
  }

  try {
    key = await raas.key.get(username, password)
  } catch(error) {
    display.error('Couldn\'t fetch key', error)
  }

  try {
    conf.set('key', key)
  } catch(error) {
    display.error('Couldn\'t save key', error)
  }

  display.success('You\'re now ready to run commands')
}