module.exports = {
  extract: true,
  minimize: true,
  sourceMap: true,
	plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env'),
  ],
};