const name = "Pritanshu"
const repoCount = 50

//console.log(name + repoCount) --> This is the old way of writing
//------------------//

//New type ->

//string interpolation is ->

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Pritanshu')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());

const newString = gameName.slice(0,4);
console.log(newString);

const newStringOne = "    Pritanshu          "
console.log(newStringOne)
console.log(newStringOne.trim())