const express = require('express');
const app = express();
const port = 4000;

// port에서 서버 실행
app.listen(port, () => {
  console.log(`Ex app listening on prot ${port}`);
});

// 홈페이지에 GET 요청이 오면 "Hello from Node API"로 응답합니다.
app.get('/', (req, res) => {
  res.send("Hello from Node API");
});