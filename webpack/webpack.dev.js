const { merge } = require('webpack-merge');
const common = require('./webpack.common')

module.exports = merge(common, {
	mode: "development",
	module: {
		rules: [
		  {
			test: /\.(sa|sc|c)ss$/,
			use: [
				"style-loader",
				'css-loader',
			],
		  },
		],
	  },
});