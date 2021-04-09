module.exports = {
  configureWebpack: {
    externals: {
      'AMap': 'AMap'
    }
  },
  devServer: {
    // publicPath: './',
    // publicPath: process.env.NODE_ENV === 'development'
    //   ? './'
    //   : '/sub-project/',
      proxy: {
      //这里的api在axios传递数据时要用，可以检测请求地址，如果以"/api"开头，就会默认使用下面的代理
          '/api': {
              target: 'http://localhost:3001', //API服务器的地址
              changeOrigin: true,//"changeOrigin"用来设置开启代理
              pathRewrite: {
                  '^/api': ''
              }
          }
      },
  },
}