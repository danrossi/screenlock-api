import terser from '@rollup/plugin-terser';
//


const banner = `
/**
 * @license
 * screenlock-polyfill
 * @author danrossi / https://github.com/danrossi
 * Copyright (c) 2017 Google
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
`;
export default [
	{
		input: './screenlock.js',
		plugins: [
			terser()
		],
		output: [
			{
				format: 'umd',
				name: "ScreenLockApi",
				banner: banner,
				file: 'build/screenlock-api.min.js'
			}
		]
	},
	{
		input: './fullscreen.js',
		plugins: [
			terser()
		],
		output: [
			{
				format: 'umd',
				name: "FullscreenApi",
				banner: banner,
				file: 'build/fullscreen-api.min.js'
			}
		]
	},
	{
		input: './src/ScreenLockApi.js',
		output: [
			{
				format: 'esm',
				banner: banner,
				file: 'build/screenlock-api.module.js'
			}
		]
	},
	{
		input: './src/FullscreenApi',
		output: [
			{
				format: 'esm',
				banner: banner,
				file: 'build/fullscreen-api.module.js'
			}
		]
	}
];
