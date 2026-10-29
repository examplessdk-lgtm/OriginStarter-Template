import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
createServer(async(req,res)=>{
 if(req.url!=='/'){res.writeHead(404);res.end('Not found');return;}
 try{res.setHeader('Content-Type','text/html; charset=utf-8');res.end((await readFile(new URL('./index.html',import.meta.url),'utf8')).replaceAll('{{BASE}}','/'));}
 catch{res.writeHead(500);res.end('Unable to load starter');}
}).listen(3000,'127.0.0.1',()=>console.log('http://localhost:3000'));
