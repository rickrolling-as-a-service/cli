const raas = require('raas-api')
const display = require('../lib/display')

module.exports = async (conf, args) => {
  const key = conf.get('key')
  if (!key) {
    display.error('Please log in first')
  }
  raas.key.set(key)

  const memeIndex = parseInt(args[0]) || 0
  display.log(`Meme index is ${memeIndex}`)

  let deployment
  try {
    deployment = await raas.deployments.create(memeIndex)
  } catch(error) {
    display.error('Error creating deployment', error)
  }

  display.log(`Code is ${deployment.code}`)
  conf.set('lastDeployment', deployment.code)
  
  display.success(`Deployment available at ${deployment.uri}`)
}