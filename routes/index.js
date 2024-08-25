// 프론트에서 호출할 백엔드 주소 생성 1주소 = 1기능
// REST API 설계
const express = require("express");
const router = express.Router();
const guestsApi = require("./guests.api")

router.use("/guests", guestsApi);

module.exports = router;