const express = require("express");
const app = express();

app.listen(3000);

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

app.get("/:nickname", function (req, res) {
  const { nickname } = req.params;

  if (nickname == "@15ya.fullmoon") {
    res.json(youtuber1);
  } else if (nickname == "@ChiumChakMan_Official") {
    res.json(youtuber2);
  } else if (nickname == "@TEO_universe") {
    res.json(youtuber3);
  } //예외처리
  else {
    res.json({
      message: "누구세요?",
    });
  }
});
