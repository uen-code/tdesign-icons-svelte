import copy from "rollup-plugin-copy";

// components copy
const components = {
	input: 'src/index.js',
	plugins: [
		copy({
			targets: [{ src: 'src/*', dest: 'lib/' }],
			copyOnce: true
		})
	],
	output: {
		dir: 'lib/',
		assetFileNames: '[name].css',
	},
}

export default [components]