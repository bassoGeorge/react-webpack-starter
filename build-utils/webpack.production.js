const parts = require('./webpack.parts')
const merge = require('webpack-merge')

module.exports = env => {
	return merge([
		parts.extractCSS(),
		parts.extractSASS()
	])
}
