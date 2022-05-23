const webpack = require("webpack");
const { CleanWebpackPlugin }  = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    target: "web",

    resolve: {
        extensions: [".ts", ".js", ".json", ".html"],
    },

    module: {
        rules: [
            { test: /.ts$/, loader: "ts-loader" },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            { test: /\.html$/, loader: "html-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: ([
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new CleanWebpackPlugin({
            verbose: true
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: "body",
            chunks: ['index'],
            filename: "../Views/Shared/_Layout.cshtml",
            template: "./Views/Shared/_Layout_Template.cshtml"
        })
    ]),
    stats: { colors: true }
};