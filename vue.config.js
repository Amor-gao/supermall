const { defineConfig } = require('@vue/cli-service')
// const { resolve } = require('core-js/fn/promise')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }    
    }
  }
}