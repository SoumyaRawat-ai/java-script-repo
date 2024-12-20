const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcuts is for ${myObject[key]}`);

}

const arr = ["js", "ruby", "python", "cpp"]
for (const key in arr) {
    console.log(arr[key]);

}

// const map = new Map()
// map.set('IN', "India")
// map.set('usa', "United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//         console.log(key);
        
//     }


