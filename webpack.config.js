const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,//加载css
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,//加载图片
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,//加载字体
                use: [
                    'file-loader'
                ]
            },
            { 
                test: /\.js$/, //打包高级语法
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    }
};