// singleton

 // object literal


 const mySym = Symbol("key1")

 const jsUser = {
    name: "hitesh",
    "full name" : "Soumya rawat",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "soumya@gmail.com",
    isLoggedIn: false,
    lastLogingdays:["Monday", "Saturday"]
 }
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "hire@gmail"
//Object.freeze(jsUser)
jsUser.email = "chatbot@gmail"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello Js user")
}
jsUser.greetinTwo = function(){
    console.log(`hello js user ${this.name} how are you`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetinTwo());





//  myArray = ["h", "i"]
//  myArray[1]