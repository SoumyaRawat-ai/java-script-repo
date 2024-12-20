
let a = 300
if (true) {
    let a = 10
    const b = 20
  //console.log("inner:", a)
}

// console.log(a);
// console.log(b);


function one() {
    const username = "Soumya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)

     two()
}

//  one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
       // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// ++++++++++++++++++++ interesting ++++++++++++++++++++++++++++

addone(5)
function addone(num){
   console.log(num + 1);
   
    return 
}

addTwo(5)
const addTwo = function(num){
    return console.log(  num + 2 );
    
}
