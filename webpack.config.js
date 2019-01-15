const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: [path.resolve(__dirname, "src/app.ts")],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.js"
    },
    module: {
        rules:[
            {
                test: /\.ts?$/,
                exclude: "/node_modules/",
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts','jsx','tsx']
    }
}