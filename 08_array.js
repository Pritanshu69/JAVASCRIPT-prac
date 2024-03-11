//array

const myArr = [0,2,1,2]

const myArr2 = new Array(1,2,3,3);

myArr.push(6);
myArr.pop();
myArr.unshift(9);
//console.log(myArr.indexOf(7));
// console.log(myArr)
// console.log(myArr.join());
// console.log(typeof myArr2);

//splice & slice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B",  myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2)
