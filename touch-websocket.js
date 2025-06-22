const ws = new WebSocket('wss://211.38.170.175:8443'); // 프록시 서버의 WSS 주소로 변경

ws.onopen = () => {
  console.log('웹소켓 연결됨!');
  ws.send('Hello from Web!');
};

ws.onmessage = (event) => {
  console.log('TouchDesigner에서 받은 메시지:', event.data);
};