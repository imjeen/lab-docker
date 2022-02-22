import path from 'path';
import wepback from 'webpack';
import HTMLPlugin from 'html-webpack-plugin';

export default {

    mode: 'development',

    context: __dirname,

    devtool: "source-map",

    entry:{
        app: path.resolve(__dirname, '../src/main.js'),
    },

    output: {
        path: path.resolve(__dirname, '../www'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
        ],
    },

    plugins: [
        new HTMLPlugin({
            title: '',
            template: path.resolve(__dirname, '../src/index.template.ejs'),
            filename: 'index.html',
            inject: false,
            /*minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true,
            },*/
        }),
    ],

}
