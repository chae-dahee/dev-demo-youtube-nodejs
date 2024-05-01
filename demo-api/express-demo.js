const express = require("express");
const app = express();

app.listen(3000);

let nodejsBook = {
  title: "nodejs 책",
  price: 20000,
  author: "datdaradanadat",
};

app.get("/products/1", function (req, res) {
  res.json(nodejsBook);
});