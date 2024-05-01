if(true){
    var n1 = 7;
    const n2 = 3;  // 블록 스코프
    let n3 = 5;   //블록 스코프

    console.log(n1 + "X" + n2 + "=" + n3);
    console.log(`${n1} X ${n2} = ${n3}`);
}

console.log(n1);
// console.log(n2);
// console.log(n3);
