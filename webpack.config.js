const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
const combinedLoaders = require('webpack-combine-loaders')

module.exports = {
  
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s*)css$/,
        loader: combinedLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', 
            query: {
              modules: true, 
              localIdentName: '[name]__[loader]__[hash:base64:5]'
            }
          },{
            loader: "sass-loader",
             // compiles Sass to CSS
          }
        ])
      }, 
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
      }
    ]
  }
};