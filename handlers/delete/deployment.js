const raas = require('raas-api')
const display = require('../../lib/display')

module.exports = async (conf, args) => {
  const key = conf.get('key')
  if (!key) {
    display.error('Please log in first')
  }
  raas.key.set(key)

  const code = args[0] || conf.get('lastDeployment')
  if (!code) display.error('You must specify a deployment code')
  display.log(`Code is ${code}`)

  let finalViews
  try {
    finalViews = await raas.deployments.delete(code)
  } catch(error) {
    display.error('Couldn\'t delete deployment', error)
  }

  display.log(`${finalViews || 'No'} final view${finalViews === 1 ? '' : 's'}`)
  display.success('Deployment deleted')
}