import pug, { LocalsObject } from 'pug';
import fs from 'fs';


export const jsonToHtml = (source: string, template?: string) => {
  const defaultTemplate = fs.readFileSync(__dirname + '/template.pug', 'utf8');
  let usedTemplate = template || defaultTemplate;

  const fn = pug.compile(usedTemplate, {
    pretty: true,
  });

  const html = fn(source as unknown as LocalsObject);
  return html
}
