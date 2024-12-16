//  Primitive Data Type
// 7 types :
// String, Number , Boolean, Null, Undefined, Symbol, BigInt

// const score:number = 100     -- typescript

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
// const userEmail = undefined
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 7382859898598n 

// -----------------------------------------------------------------------------------------------------


// Reference (Non-Primitive)
// Array, Object, Function

const heros = ["Anjal", "Aayush", "Rohan", "Aashish"]

let myObj = {
    name : "Anjal",
    age : 17
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof outSideTemp);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myName = "anjalNIraula"

let myAnotherName = myName

myAnotherName = "anjal"

console.log(myAnotherName);

let userOne = {
    name : "Anjal Niraula",
    email :  "user@gmail.com"

}

let userTwo = userOne

userTwo.email = "anjal@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);



