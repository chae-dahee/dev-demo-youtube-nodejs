const express = require("express");
const app = express();
app.listen(3000);

let fruits = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "strawberry" },
  { id: 4, name: "blueberry" },
];

//과일 전체 조회
app.get("/fruits", (req, res) => {
  res.json(fruits); //json arr
});

//과일 개별 조회
app.get("/fruits/:id", (req, res) => {
  let id = req.params.id;
  let findFruit = fruits.find((val) => val.id == id);
  findFruit
    ? res.json(findFruit)
    : res.status(404).send({message : "전달주신 id로 저장된 과일이 없습니다"});
});
