const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico',
		}),
		new WasmPackPlugin({
			crateDirectory: path.resolve(__dirname, "../src/wasm"),
			outDir: '../../wasm_pkg',
		}),
	],
	experiments: {
		asyncWebAssembly: true,
	},
	devServer: {
		port: 3000,
	},
}