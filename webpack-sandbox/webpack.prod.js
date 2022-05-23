const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const CommonConfig = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(CommonConfig, {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        vendor: [
            "jquery",
            "jquery-validation",
            "bootstrap",
            "jquery-validation-unobtrusive"
        ]
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: __dirname + "/dist",
        publicPath: "/dist/",
        library: "aspAndWebpack",
        libraryTarget: "var"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new MiniCssExtractPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
    ],
    optimization: {
        moduleIds: 'named',
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            chunks: 'all',
            minSize: 244,
        },
    }
})