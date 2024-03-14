// singleton method

const Tinder = {
    email : "prit@chatgpt.com",
    fullname: {
        userFullName: {
            firstname: "Pritanshu",
            lastname: "Samanta"
        }
    }
}

//console.log(Tinder.fullname?.userFullName.firstname);  // ? is protection if the file doesn't exist during api using

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2) // {} for object assign suity

console.log(obj3);