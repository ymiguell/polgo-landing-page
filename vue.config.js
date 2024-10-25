const { defineConfig } = require('@vue/cli-service');


module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://winners-api-aw6g.onrender.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
