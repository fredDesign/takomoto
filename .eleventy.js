const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {

	eleventyConfig.addFilter("readable_date", function(date) {
		return DateTime.fromJSDate(date).toFormat('dd LLL yyyy')
	});

	eleventyConfig.addFilter("get_suffix", function(page) {
		const path = page.inputPath.split('.')
		return path[path.length - 1]
	});

	eleventyConfig.addFilter("get_filename", function(page) {
		const path = page.inputPath.split('/')
		return path[path.length - 1]
	});

	eleventyConfig.addFilter("get_parentdirectory", function(page) {
		const path = page.inputPath.split('/')
		return path[path.length - 2]
	});


	eleventyConfig.addCollection("home", function(collection) {
		collection_new = collection.getFilteredByGlob("**/0-home/*/*.*")
		return collection_new.sort(function(a, b) {
			return a.inputPath.localeCompare(b.inputPath)
		});
	});




	eleventyConfig.addCollection("posts", function(collection) {
		collection_new = collection.getFilteredByGlob("**/posts/*/*.*")
		return collection_new.sort(function(a, b) {
			return a.inputPath.localeCompare(b.inputPath)
		  });
	});

	// Layouts
	eleventyConfig.addLayoutAlias('base',			'layouts/base.njk')
	eleventyConfig.addLayoutAlias('home',			'layouts/home.njk')
	eleventyConfig.addLayoutAlias('intern',			'layouts/intern.njk')
	//eleventyConfig.addLayoutAlias('components',		'layouts/components.njk')
	//eleventyConfig.addLayoutAlias('elements',		'layouts/elements.njk')
	//eleventyConfig.addLayoutAlias('objects',		'layouts/objects.njk')
	//eleventyConfig.addLayoutAlias('utilities',		'layouts/utilities.njk')

	// Base eleventyConfig
	return {
		dir: {
			input: './src/eleventy',
			output: 'build',
			includes: 'includes',	// ⚠️ This value is relative to your input directory.
			data: 'data'			// ⚠️ This value is relative to your input directory.
		},
		templateFormats: ['njk', 'md', 'html'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		passthroughFileCopy: true,
		env: process.env.ELEVENTY_ENV,

	}
};
