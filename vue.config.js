const webpack = require('webpack')

module.exports = {
  lintOnSave: false,
  publicPath: '',

  chainWebpack: config => {
    config.module
      .rule('vue')
        .use('vux-cli3-loader')
          .loader('vux-cli3-loader')
          .before('vue-loader')
  },
  configureWebpack: config => {
    config.plugins.push(new webpack.DefinePlugin({
      V_LOCALE: JSON.stringify('zh-CN'),
      V_SSR: JSON.stringify(false),
      SUPPORT_SSR_TAG: JSON.stringify(false)
    }))
    config.performance = {
      hints: false
    }
  }
}
