const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Soumya"
//     console.log(this.username);
    
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//      console.log(this.username);
// }
// const chai = () => {
//     let username = "hitesh"
//      console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return console.log(num1 + num2)
// }


// const addTwo = (num1, num2) =>  console.log(num1 + num2)  // implecite arrow function


// const addTwo = (num1, num2) =>  (console.log(num1 + num2))  
const addTwo = (num1, num2) =>  ({username: "hitesh"})  


console.log(addTwo(2, 4));


// const myArray = [2, 3, 4, 5]

// myArray.forEach()