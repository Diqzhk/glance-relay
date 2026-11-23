import { createServer } from 'node:http';
const port = process.env.PORT || 10000;
createServer((req, res) => {
  if (req.url === '/health' || req.url === '/') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ ok: true, service: 'glance-relay' }));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(port, () => console.log('listening on ' + port));
