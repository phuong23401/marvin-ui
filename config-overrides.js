/* eslint-disable @typescript-eslint/no-var-requires */
// const webpack = require('webpack')

// module.exports = function override(config) {
//   config.plugins.push(new webpack.NormalModuleReplacementPlugin('@ledgerhq/devices', '@ledgerhq/devices/lib-es'))
//   return config
// }
module.exports = function override(webpackConfig) {
  webpackConfig.resolve.alias = {
    ...webpackConfig.resolve.alias,
    '@ledgerhq/devices/hid-framing': '@ledgerhq/devices/lib/hid-framing',
  }

  return webpackConfig
}
