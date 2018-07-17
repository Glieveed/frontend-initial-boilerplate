const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const DIST_DIR   = path.join(__dirname, "public/assets/js");
const DEV_DIR = path.join(__dirname, "resources/js");

module.exports = {
    context: DEV_DIR,
    mode: 'development',
    entry: "./main.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.html$/,
                use: 'vue-template-loader'
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};