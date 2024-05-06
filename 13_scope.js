//local scope
if(true){                   //curly braces means scope
    let a = 10
    const b = 69
}

//global scope
const c = 108

//nested scope 

function one(){
    const username = "Pritanshu"

    function two() {
        const website ="youtube";
        console.log(username);
    }
    console.log(website);

    two()
}
one()
