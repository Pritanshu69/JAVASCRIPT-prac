//let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString);

let myCreatedDate = new Date(2023, 0, 23)  //month starts from zero here!
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date()
newDate.toLocaleString('default', {
    weekday: "long"
})


