module.exports = {
  devServer: {
    open: true,
    https: false,
    port: 3000,
    compress: true,
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/variables.scss";',
      },
    },
  },
};
