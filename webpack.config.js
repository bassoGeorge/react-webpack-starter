const merge = require('webpack-merge')

const loadModeConfig = env => require(`./build-utils/webpack.${env.mode}`)(env)
const loadPresets    = require('./build-utils/load-presets')

module.exports = ({mode = 'production', presets = ["css"], ...rest}) => {

	const corePresets = [
		"html",
		"es6",
		"sass"
	]

	const env = {
		mode,
		presets: [...corePresets, ...presets],
		...rest
	}

	return merge(
		loadModeConfig(env),
		loadPresets(env)
	)
}
