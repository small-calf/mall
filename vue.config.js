//路径的配置
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {//配置别名
        'assets': '@/assets',//@相当于src
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}