/*Create a user object with at least 5 properties — mix of string, number, boolean. Then:

Read two properties with dot notation
Read one property with bracket notation using a <variable></variable> */

function Objects(){

    const user ={
        name:"Tina",
        age:30,
        occupation: "Sales",
        zip:"21702",
        country:"USA",
        citizen: true
    }

    console.log(user.name)
    console.log(user.age)
    console.log(user["zip"])

    const key ="zip"
    console.log(user[key])

/*Exercise 2 — Nested objects
Create an object with a nested object inside it. Then:

Access a property from the nested object
Update a nested field without mutating the original — use spread at every level*/ 



const newStudent = {...student, address:{...student.address, city:"cincinnati"}}
const anotherStudent = {...student, address:{...student.address, zip:"45789-1540"}}

console.log(student.address.city) // or maybe we can do console.log(sudent.?address.?city) chaining to make sure no undefined if address is not found 
const updatedStudent = {...student, name: "lina"} // should i spread address too? i think its unnecessary because i am not updating address
console.log(updatedStudent)


const userGreet = {
    name: "Shawn",
    age: 35,
     greet(){
        return `Hi ${this.name}, you are ${this.age} today. Happy Birthday!`
    }
}
console.log(userGreet.greet())


/*
Exercise 3 — Object.keys, Object.values, Object.entries
Using your student object:

Log all the keys
Log all the values
Use Object.entries with .map() to render each key-value pair as a <p> tag in JSX
*/


const student = {
    name: "sam",
    age: 7,
    hasId: true,
    address:{
        street: "100 noolan rd",
        city:"wonderland",
        st:"AL",
        zip: "0012154",
        country: "usa"

    }
}

const bankUser = {
    name:"sadia",
    balance:150,
    deposit(amount){
        return `Hi ${this.name}, your current balance is $ ${this.balance + amount}`
    },
    withdraw(amount){
        return `Hi ${this.name}, your current balance is $ ${this.balance - amount}`
       
    }
}

console.log(bankUser.deposit(20))
console.log(bankUser.withdraw(20))


console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))
return(
        <div>
            <p>Name:{user.name}</p>
            <p>Age: {user.age}</p>
            <p>Citizen: {user["citizen"]}</p>

            {Object.entries(student).map(([key, value]) => <p key={key}>{key}:{value}</p>)}
        </div>
    )
}
