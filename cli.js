#!/usr/bin/env node
const Conf = require('conf')
const conf = new Conf()
const chalk = require('chalk')
const display = require('./lib/display')

const version = '1.0.0'
console.log(chalk.bold(`RaaS CLI v${version}`))

const args = process.argv.slice(2)
const command = args.length ? args[0] : 'deploy'
switch(command) {
  case 'deploy': {
    require('./handlers/deploy')(conf, args.slice(1))
    break
  }
  case 'alias': {
    require('./handlers/alias')(conf, args.slice(1))
    break
  }
  case 'login': {
    require('./handlers/login')(conf, args.slice(1))
    break
  }
  case 'delete': {
    switch(args[1]) {
      case 'deployment': {
        require('./handlers/delete/deployment')(conf, args.slice(2))
        break
      }
      case 'alias': {
        require('./handlers/delete/alias')(conf, args.slice(2))
        break
      }
      default: {
        display.error(`Unknown thing '${args[1]}'`)
      }
    }
    break
  }
  case 'info': {
    switch(args[1]) {
      case 'deployment': {
        require('./handlers/info/deployment')(conf, args.slice(2))
        break
      }
      case 'alias': {
        require('./handlers/info/alias')(conf, args.slice(2))
        break
      }
      default: {
        display.error(`Unknown thing '${args[1]}'`)
      }
    }
    break
  }
  case 'help': {
    require('./handlers/help')(conf, args.slice(1))
    break
  }
  default: {
    display.warning('Unknown command, displaying help')
    require('./handlers/help')(conf, [])
  }
}