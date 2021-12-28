

# Usage

```
const fs = require('fs');
const { jsonToHtml } = require('rspec-json-to-html');

const rspecJson = JSON.parse(fs.readFileSync('./rspec.json', 'utf8'));
const template = fs.readFileSync('./template.pug', 'utf8');

const html = jsonToHtml(rspecJson, template);

fs.writeFileSync('./report.html', html);
```