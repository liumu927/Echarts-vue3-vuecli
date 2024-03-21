const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    // 关闭eslint
    lintOnSave:false,
    // 配置静态资源路径，判断生产模式还是开发模式
    publicPath: process.env.NODE_ENV = 'production' ? './' : '/'
})
