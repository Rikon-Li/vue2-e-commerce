module.exports = {
  // publicPath: "/pc/static",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
};
