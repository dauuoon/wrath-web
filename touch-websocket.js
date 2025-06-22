const ws = new WebSocket('ws://211.38.170.175:8765'); // 실제로는 TouchDesigner가 실행 중인 PC의 IP로 변경

ws.onopen = () => {
  console.log('웹소켓 연결됨!');
  ws.send('Hello from Web!');
};

ws.onmessage = (event) => {
  console.log('TouchDesigner에서 받은 메시지:', event.data);
};