module.exports = {
  // publicPath: "/static",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:80",
        changeOrigin: true,
      },
    },
  },
};
