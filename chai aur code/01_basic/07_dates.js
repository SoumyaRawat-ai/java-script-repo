// Date

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
// console.log(myDate.getTimezoneOffset())

console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)

console.log(newDate.toLocaleString('default', {
    weekday :"long"
}))
