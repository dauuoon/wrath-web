const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');

// SSL 인증서 경로
const server = https.createServer({
  cert: fs.readFileSync('cert.pem'),
  key: fs.readFileSync('key.pem')
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(client) {
  // TouchDesigner WebSocket 서버에 연결
  const td = new WebSocket('ws://211.38.170.175:8765'); // 실제 TouchDesigner IP:포트로 변경

  // 클라이언트 → TouchDesigner
  client.on('message', msg => td.readyState === 1 && td.send(msg));
  // TouchDesigner → 클라이언트
  td.on('message', msg => client.readyState === 1 && client.send(msg));
});

server.listen(8443, () => {
  console.log('WSS 프록시 서버가 8443 포트에서 실행 중');
});