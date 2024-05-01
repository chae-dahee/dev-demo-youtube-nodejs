const express = require("express");
const app = express();

//API : GET + "/hello"
//"TEST SUCCESS"
app.get("/hello", function (req, res) {
  res.send({
    say: "안녕하세요",
  });
});

//API : GET + "/bye"
//"TEST SUCCESS"
app.get("/bye", function (req, res) {
  res.json({
    say: "안녕히가세요",
  });
});

//API : GET + "/nicetomeetyou"
//"TEST SUCCESS"
app.get("/nicetomeetyou", function (req, res) {
  res.json({
    say: "만반잘부",
  });
});

app.listen(3000);
