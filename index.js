const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS 설정
app.use(cors());

// URL 인코딩된 데이터 파싱 미들웨어
app.use(bodyParser.urlencoded({ extended: false }));

// JSON 데이터 파싱 미들웨어
app.use(bodyParser.json());

const mongoURL = process.env.MONGODB_LOCAL;

// Mongoose 연결
mongoose
  .connect(mongoURL)
  .then(() => console.log("mongoose 연결됨."))
  .catch((err) => console.log("DB 연결 실패", err));


app.listen(4000, () => console.log("4000번 포트 서버 열림"));
