import './index.css'
import ProfileCard from './components/ProfileCard';
import WelcomeMessage from './components/WelcomeMessage';
import CardWrap from './components/CardWrap';
import Day3feature from './components/Day3feature';
import UseState from './components/UseState';
import ProductsProfile from './components/ProductsProfile';


function App() {

/* 
  function app() {
  console.log ("app is running")
  
}

function user_name(name) {
  return `hello ${name}`;
  
}
function total_cost(name, price, quantity) {
  return `your total for ${name} is ${price * quantity }`
  
}*/


/*
const app = function app(){console.log("App is running")}
const userName = function userName(name){return `hello ${name}`}
const totalCost = function totalCost(name, price, quantity){return(`Your total for ${name} is ${price * quantity}`)}
console.log(userName("nadia"))
console.log(totalCost("toy", 23, 1)) 

const app = () =>  console.log("app is running")
const userName =(name) => (`Hello ${name}`)
const totalCost =(name, price, quantity) => (`Your price for ${name} is ${price * quantity}`)*/
 // app()

 function greetUser(name, greeting="Hello"){
  return `${greeting}, ${name}`
 }

 function sum(...numbers){
  return numbers.reduce((total, n) => total + n, 0)
 }

 //  //{(userName("nadia"))}
    //{(totalCost("toy", 23, 1))}

  return (
    <div>

    <nav className='nav'>
     <ul>Home</ul>
     <ul>About</ul>
     <ul>Story</ul>
     <ul>Career</ul>
      
    </nav>
    <ProductsProfile/>
    <UseState/>

    {greetUser("nadia", "hi")}
    {greetUser("nadia")}
    {sum(1, 2, 3, 4, 5)}
<ProfileCard name="nadia" age="thirty two" role="director" country="USA" />
<ProfileCard name="sadia" age={22} role="manager" country="USA" bio="Welcome to my hub"/>
<ProfileCard name="tania" age={24} role="lead" country="USA" bio="Welcome to my hub"/>
<CardWrap>
  <p>Hi there, i am children prop</p>
</CardWrap>

<Day3feature/>

    </div>
  );
}

export default App;


/*
A function that takes a name and a greeting — but greeting should default to "Hello" if nothing is passed. Call it two ways — once with a greeting, once without.
A function called sum that accepts any number of arguments and returns their total. Call it with 2 numbers, then with 5 numbers.
/*
<div className="box-grid">
  <div className="box-item">1</div>
  <div className="box-item">2</div>
  <div className="box-item">3</div>
  <div className="box-item">4</div>
  <div className="box-item">5</div>
  <div className="box-item">6</div>
</div>

<footer className='footer'>
<p>PP</p>
<p>TOS</p>
<p>Socials</p>
</footer>
*/