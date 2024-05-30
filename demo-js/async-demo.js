async function f() {
  return 5;
}
f().then(
  function (result) {
    console.log("promise resolve : ", result);
  },
  function (err) {
    console.log("promise reject : ", err);
  }
);
