const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const CommonConfig = require("./webpack.common.js");

module.exports = merge(CommonConfig, {
    devtool: "inline-source-map",

    entry: path.resolve(__dirname, "src/index.ts"),

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist/",
        library: "aspAndWebpack",
        libraryTarget: "var"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    },

    plugins: ([
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        })
    ]),
})