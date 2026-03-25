function Array(){
    const names = ["nadia", "sadia", "john", "tina"]
    const colors1= ["red", "blue", "green"]
    const numbers = [10,20,30,40]
    const moods = ["happy", "tired", "focused"]
    const mixed = ["nadia", 35, true]

    // Exercise two
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday","Friday"]
    const cartItems = []
    const profileBits = ["nadia", true, 35, "developer"]
    const fruits = ["apple", "banana", "mango"];
    console.log(fruits[0])
    console.log(fruits[1])
    console.log(fruits[2])
    const cities = ["DC", "New York", "Chicago", "Boston"];
    console.log([cities[0]])
    console.log(cities[2])

    const users = [
  { name: "Nadia", role: "developer" },
  { name: "Ali", role: "designer" },
  { name: "Sara", role: "tester" }
];

console.log(users[1])
console.log(users[1].name)
console.log(users[2].role)

// Exercise three
console.log(fruits.length)
const colors = ["red", "blue", "green", "yellow"];
console.log(colors.length)
const tasks = [];
console.log(tasks.length)
const users = [
  { name: "Nadia" },
  { name: "Ali" },
  { name: "Sara" }
];

console.log(users.length)
const numbers = [10, 20, 30, 40, 50, 60];
console.log(numbers.length)
const cities = ["DC", "New York", "Chicago"];
console.log(cities.length -1)
console.log(cities.length -2) // can I do this to see NY?
const books = [
  { title: "Book A" },
  { title: "Book B" },
  { title: "Book C" },
  { title: "Book D" }
];
console.log(books.length-1)

const cities = ["DC", "New York", "Chicago"];
console.log(cities.length)
console.log(cities[cities.length-1])
const books = [
  { title: "Book A" },
  { title: "Book B" },
  { title: "Book C" }
];
console.log(books[books.length-1].title)

// exercise 4
const colors = ["red", "blue", "green"];
colors[1] ="purple"
console.log(colors)

const team = [
  { name: "Ava", role: "manager" },
  { name: "Leo", role: "developer" }
];

team[1].role = "designer"
console.log(team)

//exercise 5
const tasks = ["study", "cook"];
tasks.push("workout")
console.log(tasks)
const members = [
  { name: "Ava" },
  { name: "Leo" }
];

members.push({name:"Mia"})
console.log(members)

// exercise 6

const guests = ["Ali", "Sara", "Mina"];
guests.pop()
console.log(guests)

const books = [
  { title: "Book A" },
  { title: "Book B" },
  { title: "Book C" }
];
books.pop()
console.log(books)

// exercise 7

const moods = ["happy", "tired", "focused"];
console.log(moods.includes("tired"))

const tags = ["work", "personal", "ideas"];
console.log(tags.includes("travel"))

// exercise 8
const cities = ["DC", "New York", "Chicago"];
console.log(cities.indexOf("New York"))

const levels = ["easy", "medium", "hard"];
console.log(levels.indexOf("expert"))

// exercise 8
const queue = ["B", "C"];
queue.unshift("A")
console.log(queue)

const lineup = [
  { name: "Leo" },
  { name: "Mia" },
  { name: "Noah" }
];

lineup.shift()
console.log(lineup)

// exercise 9
const foods = ["rice", "chicken", "salad"];
for(let i=0; i<foods.length; i++){
    console.log(foods[i])
}

const team = [
  { name: "Ava" },
  { name: "Leo" },
  { name: "Mia" }
];

for (let i=0; i<team.length; i++){
    cookieStore.log(team[i].name)
}

//exercise 9
const colors = ["red", "blue", "green"];
colors.forEach((color) =>{console.log(color)}) // SEE


const users = [
  { name: "Nadia" },
  { name: "Ali" }
];

users.forEach((user) =>{console.log(user.name)}) // just names
users.forEach((user) =>{console.log({user})}) // full object

// exeercise 10
const numbers = [2, 4, 6];
 const newList = numbers.map((number) =>{return number*2})

 const team = [
  { name: "Ava" },
  { name: "Leo" },
  { name: "Mia" }
];

const names = team.map((member) => {return member.name})
console.log(names)

// exercise 11
const products = [
  { name: "Lipstick", price: 20 },
  { name: "Perfume", price: 80 },
  { name: "Brush", price: 15 }
];

const highPrice = products.filter((product) =>{return product.price > 20})

// excercise 12

const team = [
  { name: "Ava", role: "manager" },
  { name: "Leo", role: "developer" },
  { name: "Mia", role: "developer" }
];

const developers = team.find((member) => {return member.role ==="developer"})
   
// exercise 13
const orders = [
  { product: "shoes", price: 89, quantity: 2 },
  { product: "shirt", price: 35, quantity: 3 },
  { product: "pants", price: 65, quantity: 1 }
];

orders.reduce((sum, item) => sum +(item.price * item.quantity), 0)

// exercise 14
const users = [
  { name: "Nadia", age: 32, active: true },
  { name: "Sadia", age: 17, active: true },
  { name: "Tania", age: 24, active: false },
  { name: "John",  age: 28, active: true }
];

const activeUsers = users.filter((p) => p.active).filter((p)=> p.age >=18).map((p) => p.name)

// exercise 14

const cart = [
  { id: 1, name: "shoes", price: 89 },
  { id: 2, name: "shirt", price: 35 },
  { id: 3, name: "pants", price: 65 }
];

const newCart = [...cart, { id: 4, name: "hat", price: 25 }]
const newCart1 = [...cart]
const wishlist = [{ id: 5, name: "bag", price: 120 }]
const newWishList = [...cart, ...wishlist]






return(
        <div>

        </div>
    )
}