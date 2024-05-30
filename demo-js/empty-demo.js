const obj1 = {};
const obj2 = { message: "안빔" };
const num = 1;
const str1 = "one";
const str2 = ""; //문자열도 결국 객체!

console.log(Object.keys(obj1).length === 0); //length === 0
console.log(Object.keys(obj2).length === 0); //length === 1

console.log(Object.keys(num).length === 0); //true?? 오류
console.log(Object.keys(str1).length === 0);
console.log(Object.keys(str2).length === 0);
