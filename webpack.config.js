var path = require('path');

var config = {
   entry: './src/main.jsx', // entry point
   output: {
         path: path.resolve('public/'), // place where bundled app will be served
         filename: 'index_bundle.js'
      },
   devServer: {
      contentBase: './public',
         inline: true, // autorefresh
         port: 8080 // development port server
      },
   module: {
         loaders: [
            {
               test: /\.jsx?$/, // search for js files
               exclude: /node_modules/,
               loader: 'babel-loader',
   query: {
               presets: ['es2015', 'react'] // use es2015 and react
            }
         }
      ]
   }
}
module.exports = config;