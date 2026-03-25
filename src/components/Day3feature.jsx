function Day3feature(){

    const products = [
        {id:1, name:"coffee", price:3.35},
        {id:2, name:"soda", price:5.26},
        {id:3, name:"tea", price:2.45}
    ]

    if (products.length === 0){
        return <p>No product available</p>
    }

    return(
        <div>
            {products.map((product, key) =>{
                return <div key={product.id}>Name: {product.name}, Price: {product.price}</div>
            })}
        </div>
    )
}

export default Day3feature