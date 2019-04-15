const merge = require('webpack-merge')
const parts = require('./build-utils/webpack.parts')

const loadModeConfig = env => require(`./build-utils/webpack.${env.mode}`)(env)

const commonConfig = merge([
	parts.loadJS({exclude: /node_modules/}),
	parts.loadHTML({template: "./src/index.html"}),
])

module.exports = ({ mode = 'production', presets = [], ...rest }) => {
	const envWithDefaults = { mode, presets, ...rest }

	return merge(
		commonConfig,
		loadModeConfig(envWithDefaults)
	)
}
