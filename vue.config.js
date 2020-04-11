module.exports = {
  devServer: {
    open: true,   //自动打开浏览器
    port: 8080,    //随便改端口号
    overlay: {    //遮罩层
      warnings: false,
      errors: false
    }
  },
  configureWebpack: {    //别名配置
    resolve: {
      alias: {
        "assets": "@/assets",      //等价于下面
        "con": "@/components"     // 设置后 con /  就等于 components 文件路径
      }
    }
  },
  lintOnSave: false  //是否关闭eslint 检查  false 是关闭
};