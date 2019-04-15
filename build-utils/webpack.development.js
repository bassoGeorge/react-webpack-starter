const parts = require('./webpack.parts')
const merge = require('webpack-merge')

module.exports = env => {
	return merge([
		parts.devServer({
			// Customize host/port here if needed
			host: process.env.HOST,
			port: process.env.PORT,
		}),
		parts.loadCSS(),
		parts.loadSASS()
	])
}
