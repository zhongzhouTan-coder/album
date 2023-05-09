import path, { resolve } from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import webPack from 'webpack';
import WasmPackPlugin from '@wasm-tool/wasm-pack-plugin';

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: 'index.html'
		}),
		new WasmPackPlugin({
			createDirectory: path.resolve(__dirname, ".")
		}),
		new webPack.ProvidePlugin({
			TextDecoder: ['text-encoding', 'TextDecoder'],
			TextEncoder: ['text-encoding', 'TextEncoder']
		})
	],
	mode: 'development',
	experiments: {
		asyncWebAssembly: true
	}
};