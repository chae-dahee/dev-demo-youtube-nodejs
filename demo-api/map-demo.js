const express = require("express");
const app = express();
app.listen(3000);
// app.get("/:id", function (req, res) {
//     let { id } = req.params;
//     id = parseInt(id);
  
//     if (!db.get(id)) {
//       res.json({ message: "없는 상품" });
//     } else {
//       res.json({
//         id: id,
//         productName: db.get(id),
//       });
//     }
//   });

app.get("/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);

  if (!db.get(id)) {
    res.json({ message: "없는 상품" });
  } else {
    product = db.get(id);
    product["id"] = id;//product.id = id;
    res.json(db.get(id));
  }
});

let db = new Map();

let nodebook = {
  productName: "notebook",
  price: 1000000,
};

let cup = {
  productName: "cup",
  price: 13000,
};

let chair = {
  productName: "chair",
  price: 210000,
};

let diary = {
  productName: "diary",
  price: 26000,
};

db.set(1, nodebook);
db.set(2, cup);
db.set(3, chair);
db.set(4, diary);

console.log(db);
console.log(db.get(1));
// console.log(db.get('1'));
console.log(db.get(2));
console.log(db.get(3));
