![futhark-staws-logo](./docs/assets/futhark-staws-logo.png)

# Futhark:straws

Straws is a library of gulp's tasks.
[Gulp 4](https://gulpjs.com/) can now be splited into many files. We use this ability to build this library to gain modularity in our gulp automations.

## Usage

### 1. install the straws

```shell
npm install @futhark/straws --save-dev
```

### 2. use it in your gulpfile

```javascript
// gulpfilejs
const { series, parallel, watch } = require('gulp');

/* Configuration */
const {
  ASSETS,
  CSS,
  HTML,
  IMAGES,
  JS,
  PATH,
} = require('./straws.config.json');

const production = require('./tasks/helpers/mode');

/* Tasks */
const {
  archive,
  assets,
  browserReload,
  clean,
  css,
  doc,
  html,
  images,
  js,
  paniniRefresh,
  serve,
} = require('./@futhark/straws');

/* Archive */
const archiveTask = series(archive);

/* Build */
const buildTask = series(clean, parallel(assets, css, js, images, html));

/* Doc */
const docTask = series(doc);

/* Watching */
const watchTask = series(buildTask, serve, () => {
  // assets
  watch(PATH.src + ASSETS.src, series(assets))
    .on('all', series(browserReload));
  // css
  watch(PATH.src + CSS.src, series(css))
    .on('all', series(browserReload));
  // html
  watch(PATH.src + HTML.src)
    .on('all', series(paniniRefresh, html, browserReload));
  // images
  watch(PATH.src + IMAGES.src, series(images))
    .on('all', series(browserReload));
  // javascript
  watch(PATH.src + JS.src, series(js))
    .on('all', series(browserReload));
});

/* Exports */
module.exports = {
  default: production ? series(buildTask) : series(watchTask),
  archive: archiveTask,
  build: buildTask,
  doc: docTask,
  watch: watchTask,
};
```

### 3. configure in the config file

```json
// ./straws.config.json

// theses are the default values
{
  "ARCHIVE": {
    "src": "dist/**/*",
    "dest": "./"
  },
  "ASSETS": {
    "src": "**/*.{json,eot,otf,svg,ttf,woff,woff2}",
    "dest": ""
  },
  "CSS": {
    "src": "sass/**/*.{sass,scss}",
    "dest": "css"
  },
  "DOC": {
    "sassDocOptions": {
      "dest": "docs/sass/"
    }
  },
  "ERROR": "Error: <%= error.message %>",
  "HTML": {
    "src": "**/*.html",
    "dest": ""
  },
  "IMAGES": {
    "src": "images/**/*.{gif,jpg,jpeg,png,svg}",
    "dest": "images"
  },
  "JS": {
    "entries": "javascript/main.js",
    "src": "javascript/**/*.js",
    "dest": "javascript"
  },
  "PANINI": {
    "entries": "pages/**/*.{html,hbs,handlebars}",
    "src": "**/*.{html,hbs,handlebars}",
    "data": "data/**/*.{yml,js,json}",
    "dest": "",
    "paniniOptions": {
      "root": "/src/pages/",
      "layouts": "/src/layouts/",
      "partials": "/src/partials/",
      "helpers": "/src/helpers/",
      "data": "/src/data/"
    }
  },
  "PATH": {
    "src": "src/",
    "dest": "dist/"
  },
  "SERVER": {
    "port": 8000
  }
}
```

### 4. enjoy a beverage

> Well done, you can enjoy gulp automation and relax ;)


-----

More examples can be found in [Futhark:builer](https://github.com/futhark-project/builder)