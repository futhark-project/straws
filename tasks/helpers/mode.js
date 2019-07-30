const args = require('yargs').argv;

const production = process.env.NODE_ENV === 'production' || !!args.production

module.exports = production;

/*
// You can set production mode with either NODE_ENV or cli flag
// in package.json
//   "scripts": {
//     "start": "gulp",
//     "build": "cross-env NODE_ENV=production gulp"
//   },
// or
//   "scripts": {
//     "start": "gulp",
//     "build": "gulp --production"
//   },
*/
