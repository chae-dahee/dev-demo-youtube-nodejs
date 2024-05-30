const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.listen(process.env.PORT);

let nodejsBook = {
  title: "nodejs 책",
  price: 20000,
  author: "datdaradanadat",
};

app.get("/products/1", function (req, res) {
  res.json(nodejsBook);
});