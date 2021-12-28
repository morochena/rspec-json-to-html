const fs = require('fs');
const { jsonToHtml } = require('../dist/index');

const rspecJson = JSON.parse(fs.readFileSync('./test/rspec.json', 'utf8'));
// const template = fs.readFileSync('./test/template.pug', 'utf8');

const html = jsonToHtml(rspecJson);

fs.writeFileSync('./report.html', html);