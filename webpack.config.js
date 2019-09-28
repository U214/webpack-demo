const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 배포할때 필요(시작점, 아웃풋)
// __dirname : 현재 위치의 예약어
// rules(test 내용이 참이면 use실행 [←] 이 방향으로)
module.exports = {
	entry: './src/index.js',
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}