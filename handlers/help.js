const raas = require('raas-api')
const chalk = require('chalk')

module.exports = async (conf, args) => {
  switch(args[0]) {
    case 'login': {
      console.log(`
Usage: ${chalk.bold('raas login')} [key]
Arguments:
  ${chalk.bold('key')}\t\t${chalk.grey('your API key')}
Examples:
${chalk.grey('-')} Log in with a username and password
  ${chalk.cyan('$ raas login')}
${chalk.grey('-')} Log in with an API key
  ${chalk.cyan('$ raas login xxx')}
      `.trim())
      break
    }
    case 'deploy': {
      console.log(`
Usage: ${chalk.bold('raas deploy')} [memeindex]
Arguments:
  ${chalk.bold('memeindex')}\t${chalk.grey('a meme index, see https://raas.now.sh/docs/api#supported-memes')}
Examples:
${chalk.grey('-')} Create a deployment
  ${chalk.cyan('$ raas deploy')}
${chalk.grey('-')} Create a deployment with the shorthand
  ${chalk.cyan('$ raas')}
${chalk.grey('-')} Create a deployment with a custom meme index
  ${chalk.cyan('$ raas deploy 2')}
      `.trim())
      break
    }
    case 'alias': {
      console.log(`
Usage: ${chalk.bold('raas alias')} [code] <alias>
Arguments:
  ${chalk.bold('code')}\t\t${chalk.grey('the code of the deployment you want to alias')}
  ${chalk.bold('alias')}\t\t${chalk.grey('the name of the alias')}
Examples:
${chalk.grey('-')} Alias your latest deployment to 'rickroll'
  ${chalk.cyan('$ raas alias rickroll')}
${chalk.grey('-')} Alias a deployment with code 'V0DMnzp2p' to 'rickroll'
  ${chalk.cyan('$ raas alias V0DMnzp2p rickroll')}
      `.trim())
      break
    }
    case 'delete': {
      console.log(`
Usage: ${chalk.bold('raas delete')} <thing> <identifier>
Arguments:
  ${chalk.bold('thing')}\t\t${chalk.grey('what kind of thing to be deleted, can be \'deployment\' or \'alias\'')}
  ${chalk.bold('identifier')}\t${chalk.grey('what exactly to be deleted, can be an alias or a code')}
Examples:
${chalk.grey('-')} Delete your last deployment
  ${chalk.cyan('$ raas delete deployment')}
${chalk.grey('-')} Delete an alias called 'test'
  ${chalk.cyan('$ raas delete alias test')}
      `.trim())
      break
    }
    case 'info': {
      console.log(`
Usage: ${chalk.bold('raas info')} <thing> <identifier>
Arguments:
  ${chalk.bold('thing')}\t\t${chalk.grey('what kind of thing to get info on, can be \'deployment\' or \'alias\'')}
  ${chalk.bold('identifier')}\t${chalk.grey('what exactly to get info on, can be an alias or a code')}
Examples:
${chalk.grey('-')} Get info on the last created alias
  ${chalk.cyan('$ raas info alias')}
${chalk.grey('-')} Get info on a deployment with code 'V0DMnzp2p'
  ${chalk.cyan('$ raas info deployment V0DMnzp2p')}
      `.trim())
      break
    }
    case 'help': {
      console.log(`
Usage: ${chalk.bold('raas help')} [command]
Arguments:
  ${chalk.bold('command')}\t${chalk.grey('a valid command to get help on')}
Examples:
${chalk.grey('-')} List commands and some examples
  ${chalk.cyan('$ raas help')}
${chalk.grey('-')} Get specific help on 'deploy'
  ${chalk.cyan('$ raas help deploy')}
      `.trim())
      break
    }
    default: {
      console.log(`
Commands:
  ${chalk.bold('login')}\t\t${chalk.grey('logs you in')}
  ${chalk.bold('help')}\t\t${chalk.grey('shows usage information')}
  ${chalk.bold('deploy')}\t${chalk.grey('creates a deployment')}
  ${chalk.bold('alias')}\t\t${chalk.grey('aliases a deployment')}
  ${chalk.bold('delete')}\t${chalk.grey('deletes a deployment or alias')}
  ${chalk.bold('info')}\t\t${chalk.grey('gets info on a deployment or alias')}
Examples:
${chalk.grey('-')} Quickly create a deployment
  ${chalk.cyan('$ raas')}
${chalk.grey('-')} Get info on your latest deployment
  ${chalk.cyan('$ raas info deployment')}
${chalk.grey('-')} Log in
  ${chalk.cyan('$ raas login')}
${chalk.grey('-')} Get help on a command
  ${chalk.cyan('$ raas help <command>')}
      `.trim())
    }
  }
}