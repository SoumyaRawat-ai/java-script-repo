

function sayMyName(){
    console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("t");
}

// sayMyName()

// function addTwoNumber(number1, number2){

//     console.log(number1 + number2)
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

 const result = addTwoNumber(3, 5)

//  console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
       console.log("Please enter a username") 
       return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kitesh"))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1
} 
console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Soumya",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const mynewArray = [200, 400, 600, 700]

function returnsecondValue (getArray){
    return getArray[0]
}
console.log(returnsecondValue(mynewArray))
console.log(returnsecondValue([200, 300, 400, 500]))