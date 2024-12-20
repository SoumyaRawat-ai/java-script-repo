// Primitive

//7 types : String, Number, Boolearn, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const outsideTemp = null
let userEmial = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 33456666645454545n
console.log(typeof bigNumber)

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktima", "naagraj","doga"]

let myObj ={
    name: "soumya",
    age: 22,
}

const myFunction = function(){
    console.log("hello world")
}
console.log(typeof id);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let youtubeName = "helloyou"

let myname = youtubeName;

myname = "onetwo"

console.log(youtubeName);
console.log(myname);

let userone = {
    email: "soumyarawat02@gmail",
    upi: "43545@ynbl"
}

let usertwo = userone

usertwo.email = "new@gmail"
 console.log(usertwo);
 
