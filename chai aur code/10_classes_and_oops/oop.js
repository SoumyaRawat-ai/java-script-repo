const user = {
    username: "soumya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this);
        
    }

}
const user2 = {
    username: "soumya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this);
        
    }

}

console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);


function User(username, loginCount, isLoggedIN){
    this.username = username
    this.loginCount= loginCount
    this.isLoggedIN = isLoggedIN

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    //return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("Chai aur code", 11, false)
console.log(userOne.constructor);
