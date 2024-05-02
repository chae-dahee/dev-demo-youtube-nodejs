//express 모듈 세팅
const express = require("express");
const app = express();
app.listen(3000);
//데이터 세팅
let youtuber1 = {
  channelTitle: "십오야",
  sub: "593만명",
  vidioNum: "993개",
};

let youtuber2 = {
  channelTitle: "침착맨",
  sub: "227만명",
  vidioNum: "6.6천개",
};

let youtuber3 = {
  channelTitle: "테오",
  sub: "54.8만명",
  vidioNum: "726개",
};

let db = new Map();
let idx = 1;
db.set(idx, youtuber1);
db.set(++idx, youtuber2);
db.set(++idx, youtuber3);

app.get("/youtubers", (req, res) => {
  let youtubers = {};
  db.forEach((val, key) => (youtubers[key] = val));
  res.json(youtubers);
});

app.get("/youtubers/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);
  const youtuber = db.get(id);

  if (!youtuber) res.json({ message: "정보없음" });
  else res.json(youtuber);
});

app.use(express.json()); //http 외 모듈인 '미들웨어':json 설정
app.post("/youtubers", (req, res) => {
  //Map(db)에 저장(put)
  db.set(++idx, req.body);
  res.json({
    message: `${req.body.channelTitle}님, 유튜버 등록이 완료되었습니다!`, //db.get(idx).channelTitle
  });
});

app.delete("/youtubers/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  let youtuber = db.get(id);

  if (!youtuber)
    res.json({ message: `요청하신 ${id}번은 없는 유튜버 입니다.` });
  else {
    const name = youtuber.channelTitle;
    db.delete(id);
    res.json({ message: `${name}님, 삭제되었습니다.` });
  }
});

app.delete("/youtubers", (req, res) => {
  let msg = "";
  if (db.size >= 1) {
    db.clear();
    msg = "전체 유튜버가 삭제되었습니다.";
  } else {
    msg = "삭제할 유튜버가 없습니다.";
  }
  res.json({
    message: msg,
  });
});

app.put("/youtubers/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  let youtuber = db.get(id);
  var oldTitle = youtuber.channelTitle;

  if (!youtuber)
    res.json({ message: `요청하신 ${id}번은 없는 유튜버 입니다.` });
  else {
    let newChannelTitle = req.body.channelTitle;
    youtuber.channelTitle = newChannelTitle;
    db.set(id, youtuber);

    res.json({
      message: `${oldTitle}님, 채널명이 ${newChannelTitle}로 변경되었습니다`,
    });
  }
});
