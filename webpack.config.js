var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractWebpackPlugin = require("extract-text-webpack-plugin")
module.exports = {

    entry:'./src/app.js',//人口文件,
    output:{
        path:__dirname+'/build',
        filename:'app.js'
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://touch.daling.com/',
                changeOrigin:true,
                secure:false
            }
        },
		contentBase:'./build',//服务器要在哪个地方开启，默认是在webpack.config.js的路径中
		port:9000,//端口
		host:'localhost',//域名
		historyApiFallback:true//是否使用history的go方法
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new ExtractWebpackPlugin({
            filename:'app.css',
            allChunks:true
        })
    ],
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:ExtractWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test:/\.scss$/,
                loader:ExtractWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader!sass-loader'
                })
            },
            {
                test:/\.js$/,
                loader:'jsx-loader'
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query: {
                    presets: ['es2015','react']
                 }
            },
          
    　　　　{
    　　　　　　test: /\.(png|jpg|gif)$/,
    　　　　　　loader: 'url-loader?limit=204800&name=images/[hash:8].[name].[ext]'
    　　　　}
             

        ]
    }
}