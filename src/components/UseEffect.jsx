import { useEffect, useState } from "react";

function UseEffect(){
    const [quotes, setQuotes] = useState("")

     useEffect(() =>{
        fetch("https://dummyjson.com/quotes/random")
        .then((response) =>  response.json())
        .then((data) => setQuotes(data))
        .catch((error) => console.log(error))
    },[])

   return(
    <div>

    <p>Quote: {quotes.quote}</p>
    <p>Author: {quotes.author}</p>
    </div>
   )
}

export default UseEffect