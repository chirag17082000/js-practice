const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// },0) // ye jo zero pass kiya hai ye accumulator ke liye kiya hai ki accumulator ki initial value lya rahegi

// const myTotal = myNums.reduce((acc, curr) => acc+curr,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js course",
        price : 2999,
    },
    {
        itemName : "python course",
        price : 1999,
    },
    {
        itemName : "web dev course",
        price : 999,
    },
    {
        itemName : "data scienec course",
        price : 12999,
    }
]

const totalCost = shoppingCart.reduce( (acc, item) =>  acc+item.price,0)
console.log(totalCost)

