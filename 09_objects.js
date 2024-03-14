//singleton => object.create()


//object literal
const jsUser = {
    name : "Prit",
    age: 20,
    location: "Howrah",
    email: "prit@gmail.com",
    isLoggedIn: false,
    lastloggedInDay: ["Sunday"]
}
//console.log(jsUser["email"]) //square notation

jsUser.email = "prit@chatgpt.com"
//object.freeze(jsUser)

//console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello js user, ${this.name}`)  //string interpolation
}
console.log(jsUser.greeting());