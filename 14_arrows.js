const user = {
    username: "hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome`);
        // console.log(this)
    }
}
user.username= "prit"
user.welcomemessage();

        console.log(this)

//arrow function

const addTwo = (num1,num2) => (num1 + num2)

console.log(addTwo(3,4))

