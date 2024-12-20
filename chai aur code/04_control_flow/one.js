// if
// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 40) {
//     console.log("very hot")
// } else{
    
//     console.log("temperature is greater than 50");


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }

// console.log(`user power: ${power}`);



// const balance = 755

// if (balance > 500) console.log("test"), console.log("test2"); // implicet scope dont do this


// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 700) {
//     console.log("less than 700");
    
// }else if (balance<800) {
//     console.log("less than 800");
    
// }
// else if (balance<900) {
//     console.log("less than 900");
    
// }
// else if (balance<1000) {
//     console.log("less than 1000");
    
// }
//  else {
//     console.log("less than 1100")
//  }


// if (3 != 2) {

// }

// <, >, <=, >=, ==, !=, ===, !==


const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail =true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course")
}

if (userLoggedInFromEmail || userLoggedInFromGoogle  || debitCard ) {
    console.log("user logged in");
    
}