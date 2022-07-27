const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'./docs',
  publicPath:'/vue-instagram',

  //manifest.json , service-worker.js 파일 수정가능
  pwa: {
    name: '님 앱이름',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html']  //제외
    }
  }
})
