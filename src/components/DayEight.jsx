import { useEffect } from "react"

function DayEight(){

    const prices = [25, 100, 50, 75, 200]
    const belowTwoHundred = prices.every((a,b) => a.prices - b.prices)
    console.log(belowTwoHundred)

const users = [{name: "Nadia", active: true}, {name: "Sam", active: false}, {name: "Ali", active: true}]
const inactiveUser  = users.findIndex((user) => user.active === false)
console.log(inactiveUser)

const nested = [[1, 2], [3, [4, 5]], [6]]
const flattened = nested.flat(Infinity)
console.log(flattened)


const userLogin = new Promise ((resolve, reject) =>{
    const isLoggedin = true
    if(isLoggedin){
        resolve("Welcome back")
      
    }else{
        reject("Please try again")
    }
})

userLogin
  .then((message) => console.log(message))
        .catch((error) => console.log(error))
        .finally(() => console.log("All done"))

const numberPromise = new Promise((resolve, reject) => {
    const number = 5

    if(number){
        resolve(number)
    } else {
        reject("Please enter a number")
    }
    
})

numberPromise
.then((number) => number * 2)
.then((number) => number + 10)
.then((result) => console.log(result)) //how does it know what the result is?
.catch((error) => console.log(error))
.finally(() => console.log("All done"))


const productAmount = new Promise((resolve, reject) => {
    const amount = 5

    if (amount <= 5){
        resolve("Product available")
    } else{
        reject("product not available")
    }
})

Promise.all([userLogin, numberPromise, productAmount])
.then((result) => console.log(result))
.catch(() => console.log("failed"))
.finally(() => console.log("All done"))

useEffect(() =>{
    console.log("mounted")
},[]) // once

useEffect(() =>{
    console.log("mounted")
}) // every time

 




    return(
        <div>

        </div>
    )
}

export default DayEight