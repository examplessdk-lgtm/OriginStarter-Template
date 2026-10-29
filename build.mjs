import {mkdir,readFile,writeFile} from 'node:fs/promises';
const base=process.env.NUXT_APP_BASE_URL||'/';
if(!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(base))throw new Error('Invalid base path');
await mkdir('.output/public',{recursive:true});
await writeFile('.output/public/index.html',(await readFile('index.html','utf8')).replaceAll('{{BASE}}',base));
console.log('Built .output/public/index.html');
