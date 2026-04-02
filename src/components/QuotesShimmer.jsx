import { useEffect, useState } from "react"

function QuotesShimmer(){
const [quotes, setQuotes] = useState(null)
const[isLoading, setIsloading] = useState(true)

async function getQuotes() {
    const response = await fetch("https://dummyjson.com/quotes/random")
    const data = await response.json()
    setQuotes(data)
    setIsloading(false) // so does it mean, i don't need to set it to true but set it to false when done

}

useEffect(() =>{
    getQuotes()
},[])
    return(
        <div>
            {isLoading && <div className="skeleton"></div>}
            {quotes && <p>{quotes.quote}</p>}
            {quotes && <p>{quotes.author}</p>}

        </div>
    )
}

export default QuotesShimmer

