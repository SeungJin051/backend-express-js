# npm init -y

# npm i express mongoose body-parser cors dotenv
- **express**: Node.js에서 웹 서버와 API를 쉽게 만들 수 있도록 도와주는 프레임워크입니다.
- **mongoose**: MongoDB와 Node.js를 연결해주는 ODM(Object Data Modeling) 라이브러리로, MongoDB 데이터베이스의 데이터를 쉽게 관리할 수 있게 해줍니다.
- **body-parser**: 클라이언트에서 전송된 요청(request) 데이터를 쉽게 처리할 수 있도록 도와주는 미들웨어로, 특히 POST 요청의 데이터를 파싱하는 데 사용됩니다.
- **cors**: 다른 출처에서 서버로의 요청을 허용하는 미들웨어로, Cross-Origin Resource Sharing 문제를 해결해줍니다.
- **dotenv**: 환경 변수를 관리할 수 있게 해주는 라이브러리로, `.env` 파일에 저장된 변수를 쉽게 불러올 수 있습니다.

``` js
  //  Node v19부터 nodemon이 더 이상 필요하지 않습니다. (package.json)
  "dev": "node --watch index.js"
```

# 테스트
Postman과 MongoDB Compass 사용

```
backend-express-js
├─ .gitignore
├─ README.md
├─ controllers
│  └─ guests.controllers.js # 방명록 관련 CRUD 작업을 처리하는 컨트롤러
├─ index.js # Express 서버의 기본 설정 및 서버 실행
├─ models
│  └─ Guest.js # 방명록 데이터 구조를 정의하는 Mongoose 모델
├─ package-lock.json
├─ package.json
└─ routes
   ├─ guests.api.js # 방명록 관련 CRUD 작업을 처리하는 라우터
   └─ index.js # 기본 라우터 설정, 다른 라우터 모듈을 불러오는 파일
```