// ... -> rest and spread operator both depends on use

// function calculateCartPrice(val1,val2, ...num1){   //100 -> val1 200->val2
//     return num1;
// }

// console.log(calculateCartPrice(100,200,400)) //it will return an array

const user = {
    username: "PRIT",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
