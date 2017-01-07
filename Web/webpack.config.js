var isDevBuild = process.argv.indexOf("--env.prod") < 0;
var webpack = require("webpack");
var path = require("path");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    context: path.resolve("./Source/"),
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"],
        root: path.resolve("./Source/"),
        alias: {
            "jquery": "lib/jquery-2.2.4",            
            "modernizr": "lib/modernizr-custom",
            "knockout": "lib/knockout-3.4.0.debug",
            "knockout.mapping": "lib/knockout.mapping-latest",
            "knockout.validation": "lib/knockout.validation",                   
            "es6-promise": "lib/es6-promise",
            "bootstrap": "lib/bootstrap",
            "moment": "lib/moment"
        }
    },
    entry: {
        app: "./App/Main.ts"
    },
    output: {
        path: path.resolve("./Build"),
        publicPath: "./Build/",
        filename: "[name].bundle.js"
    },
    devtool: isDevBuild ? "source-map" : "",
    module: {
        loaders: [
            { test: /\.ts?$/, loader: "ts-loader" },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url", query: { limit: 25000 } }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["source/build"], {
            root: path.resolve("./"),
            verbose: true
        }),        
        new webpack.IgnorePlugin(/vertx/),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "windows.jQuery": "jquery",
            jQuery: "jquery"
        })//,
        //new webpack.optimize.CommonsChunkPlugin("vendor.js"),
        //new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 3 })
    ].concat(isDevBuild ? [
        // Plugins that apply in development builds only
        //new webpack.SourceMapDevToolPlugin({ moduleFilenameTemplate: '../../[resourcePath]' }) // Compiled output is at './wwwroot/dist/', but sources are relative to './'
    ] : [
        // Plugins that apply in production builds only
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ])
}