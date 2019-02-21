const chalk = require('chalk')

module.exports.error = (message, error) => {
  if (error) {
    console.error(chalk.red('ERROR'), chalk.grey(message + ':', error.message ? error.message : error))
  } else {
    console.error(chalk.red('ERROR'), chalk.grey(message))
  }
  process.exit(1)
}

module.exports.warning = (message) => {
  console.log(chalk.yellow('WARN'), chalk.grey(message))
}

module.exports.log = (message) => {
  console.log(chalk.grey('>'), message)
}

module.exports.success = (message) => {
  console.log(chalk.green('SUCCESS'), chalk.grey(message))
  process.exit(0)
}