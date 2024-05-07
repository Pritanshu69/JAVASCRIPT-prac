//local scope
// if(true){                   //curly braces means scope
//     let a = 10
//     const b = 69
// }

// //global scope
// const c = 108

//nested scope 

// function one(){
//     const username = "Pritanshu"

//     function two() {
//         const website ="youtube";
//         console.log(username);
//     }
//     console.log(website);

//     two()
// }
// one()

if(true){
    const username = "Pritanshu";
    if(username === "Pritanshu"){
        const website = "youtube"
        console.log(username + website);
    }    
        // console.log(website); -> out of the scope

}
// console.log(username) -> out of the scope

// ----------INTERESTING------------

function addOne(num){
    return num + 1
}

addOne(5)

const addTwo = function(num){    //ANCHOR - another way of writting function sometimes its called expression
    return num + 2;
}

addTwo(6)

