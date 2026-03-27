import { useState } from "react";

function ProductsProfile(){

    const products = [
        {id: 1, name:"car", price:2300},
        {id: 2, name:"truck", price:2600},
        {id: 3, name:"jeep", price:210}
    ]

    const [cart, setCart] = useState([])

    if (cart.length === 0){
        return "You have no items on your list"
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0)

    return(
        <div>
            <p>Hi there, welcome to our online store. Your current balance is ${total}  ;</p> 
            
            {products.map((product, key) =>(
                <div key={product.id}>
                <p>Product Name:{product.name}, Price: {product.price}</p>
                <button onClick={() => setCart([...cart, product])}>Add</button>
                <button onClick={() => setCart(cart.filter(item => item.id !==product.id))}>Remove</button>
                <button onClick={() => setCart([])}>Reset</button>
                </div>
            ))}
        </div>
    )
}

export default ProductsProfile