const express = require("express");
const app = express();

//API : GET + "/test"
//"TEST SUCCESS"
app.get("/test", function (req, res) {
  res.send("TEST SUCCESS");
});

//API : GET + "/test/1"
//"TEST SUCCESS"
app.get("/test/1", function (req, res) {
  res.send("One!");
});

app.listen(3000);
