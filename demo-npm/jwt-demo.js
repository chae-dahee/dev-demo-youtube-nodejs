var jwt = require("jsonwebtoken"); //jwt 모듈 호출
var dotenv = require("dotenv");

dotenv.config();

var token = jwt.sign({ foo: "bar" },process.env.PRIVATE_KEY); //jwt 서명 메서드
//토큰 생성 > jwt 서명 (foo : payload, 'shhhhh' : 나만의 암호키) + SHA256

console.log(token);

//검증 - 성공하면 페이로드 값 확인가능
var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
console.log(decoded); // bar
