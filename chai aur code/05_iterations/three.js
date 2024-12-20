// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "hello world"
for (const num of greetings) {
    console.log(num);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('usa', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-' , value);
    
}


const myObj = {
    Game1 : 'NFS',
    game2 : 'Spiderman'
}

for (const key of myObj) {
    console.log(key);
    
}