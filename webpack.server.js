const path = require('path');
const webpackNodeExternals = require('webpack-node-externals'); // ** Ignore /node_modules **
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const isProd = process.env.NODE_ENV === 'production'; 
console.log(isProd); 

module.exports = {
    target: 'node',
    mode: isProd ? 'production' : 'development',
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isProd ? "[name].[contentHash].bundle.js" : "[name].bundle.js",
        chunkFilename: isProd ? "[name].[contentHash].bundle.js" : "[name].bundle.js", 
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }, 
            { test: /\.css$/, loader: 'ignore-loader' }

        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    externals: [webpackNodeExternals()], 
    plugins: [ 
        new CleanWebpackPlugin(), 
    ]
}