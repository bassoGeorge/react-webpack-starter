/**
 * Provides css capability, including extraction into single file in production
 * @param env {Object}
 * @param env.mode {String} - production | development
 */
module.exports = env => {
	const cssConfig = require('./webpack.preset.css')(env)
	return {
		...cssConfig,
		module: {
			...cssConfig.module,
			rules: [
				{
					...cssConfig.module.rules[0],
					test: /\.scss$/,
					use: [...cssConfig.module.rules[0].use, "sass-loader"]
				}
			]
		}
	}
}
