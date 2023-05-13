const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common')

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
	],
	module: {
		rules: [
		  {
			test: /\.(sa|sc|c)ss$/,
			use: [
				MiniCssExtractPlugin.loader, 
				'css-loader',
			],
		  },
		],
	  },
});