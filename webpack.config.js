const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    resolve: {
        alias: { //设置Vue被导入时候的包的路径
            "vue$": "vue/dist/vue.js"
        }
    },
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/, //加载css
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/, //加载图片
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/, //加载字体
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.js$/, //打包高级语法
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.vue$/,
            use: 'vue-loader'
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
      
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};