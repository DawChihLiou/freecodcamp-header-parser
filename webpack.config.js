var precss = require('precss');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    context: __dirname + '/app',
    entry: {
        javascript: './js/app.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1?sourceMap',
                    {
                        loader:'postcss-loader',
                        options: {
                            plugins: function() {
                                return [autoprefixer, precss];
                            }
                        }
                    },
                    'sass-loader?sourceMap'
                    
                ]
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
};