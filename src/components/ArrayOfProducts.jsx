function ArrayOfProducts({products}){

   

    if(products.length === 0){
        return "You have no items in your cart"
    }


    return(
        <div>
            {products.map((product) =>(
                <div key={product.id}>
                    <p>Product Name: {product.name}</p>
                    <p>Product Price: {product.price}</p>
                    <p>Product quantity: {product.quantity}</p>
                    
                </div>
            ))}
        </div>
    )
}

export default ArrayOfProducts