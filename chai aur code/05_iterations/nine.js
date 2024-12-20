//reduce

const myNums = [1, 2, 3]

// const mytotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const mytotal = myNums.reduce((acc, curr) => acc+curr, 0)
console.log(mytotal);


const shoppingCart = [
    {itemsName: "js course",
        price: 2999
    },
    {itemsName: "python course",
        price: 999
    },
    {itemsName: "mobile course",
        price: 5999
    },
    {itemsName: "data science course",
        price: 12999
    },
]

const priceToPay =shoppingCart.reduce((acc, item) => acc + item.price,0)

console.log(priceToPay);
