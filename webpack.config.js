const path = require("path");
require("dotenv").config();

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: path.resolve(__dirname, "./client/index.jsx"),
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
       {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/transform-runtime']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    port: process.env.DEV_PORT,
    historyApiFallback: true,
    publicPath: "/build",
    proxy: {
      "/": {
        target: `http://localhost:${process.env.SERVER_PORT}`,
        secure: false,
      },
    },
  },
};
