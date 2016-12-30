'use strict'

module.exports = {
  port: '4000',
  title: 'my-project',
  vendor: [
    'vue',
    'vue-router'
  ],
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
