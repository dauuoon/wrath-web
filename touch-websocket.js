const ws = new WebSocket('wss://interactive-9rz6.onrender.com'); // Render 배포 프록시 주소로 변경

ws.onopen = () => {
  console.log('웹소켓 연결됨!');
  ws.send('Hello from Web!');
};

ws.onmessage = (event) => {
  console.log('TouchDesigner에서 받은 메시지:', event.data);
};