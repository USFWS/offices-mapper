/* ----------------------------------------------------------------------------
  This file reads the asset manifest and copies the CSS and JavaScript files to
  the Southeast Region website dist folder.  We also print the filename of the
  assets to the console so we can update the content/map.html to reference the
  hashed assets.
 ---------------------------------------------------------------------------- */

const ncp = require('ncp').ncp;
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const objectEntries = require('object.entries');

ncp.limit = 16;

const manifest = JSON.parse(fs.readFileSync('./build/asset-manifest.json', 'utf8'));

const files = objectEntries(manifest);

const copy = (src, dest) => {
  ncp(src, dest, err => {
   if (err) return console.error(chalk.red(err));
   console.log(chalk.yellow.underline(path.basename(dest)));
  });
}

const buildDestinationPath = filePath => {
  const file = path.basename(filePath)
  const isCSS = filePath.includes('css');
  const dir = isCSS ? 'css' : 'js';
  return `../../southeast/dist/${dir}/${file}`;
}

files.forEach(file => {
  const source = `./build/${file[1]}`;
  const destination = buildDestinationPath(file[1]);
  copy(source, destination);
})
