import {argv as args } from 'yargs';

const production = process.env.NODE_ENV === 'production' || !!args.production

export default production;

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
