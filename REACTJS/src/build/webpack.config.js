const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = function( env = {} ) {
  if ( env.production )
    process.env.NODE_ENV = 'production';
  return {
    entry: './src/main.js',
    output: {
      path: path.resolve( __dirname, '../../assets' ),
      filename: env.production ? 'js/main.min.js' : 'js/main.js',
    },
    devServer: {
        contentBase: false,
        hot: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      },
    resolve: {
        extensions: [ '.js', '.vue', '.json' ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
      },
    module: {
        rules: [
          {
            test: /\.css$/,
            loader : 'css-loader'
          },
          {
            test: /\.(png|jpg)$/,
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.html$/,
            loader: 'html-loader',
          }
        ]
      },
    plugins: env.production ? [
      new webpack.DefinePlugin( {
        'process.env': {
          NODE_ENV: '"production"'
        }
      } ),
      new webpack.optimize.UglifyJsPlugin( {
        compress: {
          warnings: false
        }
      } ),
      new ExtractTextPlugin( {
        filename: 'css/style.min.css'
      } ),
    ] : [  
    new webpack.HotModuleReplacementPlugin()
    ],
    devtool: env.production ? false
      : '#cheap-module-eval-source-map'
  };
};