# takomoto
static site via eleventy


## Gulp
I'm using gulp as a task runner so you need node.js and gulp.
1. just install [node.js](https://nodejs.org/en/)
2. and run `npm install` in the project directory

Here's a list of available tasks
- `gulp serve` runs eleventy and starts the watcher
- `gulp update` lints and recompiles CSS & JS. Calls the copy-function too
- `gulp build` runs eleventy and all build tasks without starting it
- `gulp copy` to copy required files (normally not required to run manually)
- `gulp lint` lints your scss using stylelint (it's very strict)
- `gulp build:css` rebuilds the CSS
- `gulp watch-css gulp watch-js` watch satics
