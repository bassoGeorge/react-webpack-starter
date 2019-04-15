module.exports = env => ({
	module: {
		rules: [
			{
				test   : /\.js$/,
				exclude: /node_modules/,
				use    : [{
					loader: "babel-loader"
				}]
			}
		]
	}
})