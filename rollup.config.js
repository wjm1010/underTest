import buble from 'rollup-plugin-buble'

export default {
	entry: 'src/index.js',
	targets: [
	 	{ dest: 'dist/test.cjs.js', format: 'cjs' },
	 	{ dest: 'dist/test.es.js', format: 'es' }
	],
	plugins: [
	 buble()
	]
 }