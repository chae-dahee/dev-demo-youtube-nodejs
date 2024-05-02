const arr = [1,2,3,4,5];

const foreachArr = arr.forEach((val, idx, all)=>{return val*2});

const mapArr = arr.map((val, idx, all)=>{return val*2});

console.log(`foreach로 return하면 ${foreachArr},
    map으로 return하면 ${mapArr}`);