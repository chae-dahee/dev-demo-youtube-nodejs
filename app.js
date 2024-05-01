const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.post("/test", (req, res) => {
  //body에 숨겨져서 들어온 데이터를 화면에 뿌려준다.
  res.json(req.body.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
