const accountId = 144553
let accountEmail = "soumyarawat03@gamil.com"
var accountPassword ="123456"
accountCity="Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "hs@gamil.com"
accountPassword="33333"
accountCity="Bengaluru"
console.log(accountId);
// prefer not use var because of issue in block scope and 
// function scope
console.table([accountId, accountEmail,accountPassword,accountCity,accountState])
