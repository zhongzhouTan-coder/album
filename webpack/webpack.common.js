const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const preact = require('preact');

module.exports = {
	entry: "./js/index.js",
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name]_bundle.js',
		clean: true,
	},
	resolve: {
		alias: {
			react: "preact/compat",
			'react-dom/test-utils': "preact/test-utils",
			'react-dom': "preact/compat",     // Must be below test-utils
			'react/jsx-runtime': "preact/jsx-runtime",
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/template.html',
			favicon: './public/favicon.ico',
		}),
		new WasmPackPlugin({
			crateDirectory: path.resolve(__dirname, "."),
			outDir: './wasm_pkg',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	experiments: {
		asyncWebAssembly: true,
	},
	devServer: {
		port: 3000,
	},
}