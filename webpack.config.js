// const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
// const htmlPlugin = new HtmlWebPackPlugin({
//  template: "./src/index.html",
//  filename: "./index.html"
// });
module.exports = {
  //...
  devServer: {
   static: {
     directory: path.resolve(__dirname, './src'),
   },
   compress: true,
   port: 9000,
 },
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(css|scss)$/,
        
        use: [
            'css-loader',
            'sass-loader',
            'style-loader',
        ],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
      },
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader'
    }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
     filename: "bundle.js"
  },
  // plugins: [htmlPlugin],
  // devServer:{
  //   historyApiFallback : true
  // },

};
