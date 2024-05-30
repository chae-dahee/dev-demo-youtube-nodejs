//Promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 3000);
}); //객체 생성,,매개변수로 함수를 사용
promise.then(
  function (result) {
    console.log(result);
  },
  function (err) {}
);
