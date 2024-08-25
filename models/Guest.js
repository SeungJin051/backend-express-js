// 게스트 방명록 스키마

// Mongoose 모듈을 가져옵니다.
const mongoose = require("mongoose");

// Mongoose의 Schema 생성자를 가져옵니다.
const Schema = mongoose.Schema;

// 방명록 스키마를 정의합니다.
const guestSchema = new Schema(
  {
    // 방문자의 이름을 저장하는 필드
    name: {
      type: String,
      trim: true
    },
    // 방문자가 남긴 메시지를 저장하는 필드
    msg: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
    }
  },
  {
    timestamps: true
  }
);

// 정의한 스키마를 기반으로 Mongoose 모델을 생성합니다.
const Guest = mongoose.model('Guest', guestSchema);

// 생성한 모델을 외부에서 사용할 수 있도록 내보냅니다.
module.exports = Guest;
