import { useState } from "react"

function ProductWithQuantity({name, price, image}){

    const [quantity, setQuantity] = useState(0)

    return(
        <div>
            <p>Product Name:{name}</p>
            <p>Product Price: {price}</p>
            <img src={image}/>
            <p>Quantity: {quantity}</p>

            <button onClick={() => setQuantity(quantity-1)}>-</button>
            <button onClick={() => setQuantity(quantity+1)}>+</button>
        </div>
    )
}

export default ProductWithQuantity