const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumber.map( (num)=> {return num + 10})
// console.log(newNum);
// const num2 = []
//  myNumber.forEach((num)=> {
//      num ;
//      num2.push(num+10)
//     }
    
// )
//     console.log(num2);


const newNums = myNumber
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >=40)

 console.log(newNums);
                