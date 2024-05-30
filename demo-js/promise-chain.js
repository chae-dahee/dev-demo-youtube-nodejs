//Promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 3000);
})
  .then(
    function (result) {
      console.log(result);
      return result + "~~~~";
    },
    function (err) {}
  )
  .then(
    function (result) {
      console.log(result);
      return result + "!!!!";
    },
    function (err) {}
  )
  .then(
    function (result) {
      console.log(result);
    },
    function (err) {}
  );
