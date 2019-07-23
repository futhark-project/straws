const path = require('path')
const { merge } = require('lodash')

const CONFIG_FILE_NAME = 'straws.config.json'

const defaultConfigPath = path.join(__dirname, CONFIG_FILE_NAME)
const userConfigPath = path.join(process.cwd(), CONFIG_FILE_NAME)

const defaultConfig = require(defaultConfigPath)

let config = {}

try {
  const userConfig = require(userConfigPath) || {}
  config = merge({}, defaultConfig, userConfig)
  // console.log('user has config file');
} catch (error) {
  // console.log('no user config'); // no user Config
  config = defaultConfig
}

module.exports = config;