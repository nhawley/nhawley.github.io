// Runs after both the client build (dist/) and the SSR build (dist-ssr/):
// loads the server render, bakes it into dist/index.html's empty root div,
// and cleans up the throwaway SSR artifact.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const { render } = await import(path.resolve(root, 'dist-ssr/entry-server.js'));
const appHtml = render();

const templatePath = path.resolve(root, 'dist/index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error(`prerender: expected to find ${JSON.stringify(placeholder)} in dist/index.html`);
}

const finalHtml = template.replace(placeholder, `<div id="root">${appHtml}</div>`);
fs.writeFileSync(templatePath, finalHtml);

fs.rmSync(path.resolve(root, 'dist-ssr'), { recursive: true, force: true });

console.log('Prerendered dist/index.html');
