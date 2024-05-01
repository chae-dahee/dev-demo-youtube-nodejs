const express = require("express");
const app = express();

app.listen(3000);

app.get("/products/:n", function (req, res) {
  let number = parseInt(req.params.n) - 10;
  console.log(number);

  res.json({
    num: number,
  });
});

// app.get('/:nickname', function(req, res) {

//   const param = req.params

//   res.json({
//     channel : param.nickname
//   })
// })

app.get('/watch', function(req, res) {

  const q = req.query;
  console.log(q.v);
  console.log(q.t);

  const {v,t} = req.query;

  res.json({
    vidio : v,
    timeline : t,
  })
})