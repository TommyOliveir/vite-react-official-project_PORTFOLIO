import React, { useState, useEffect } from 'react'

function ProductList() {
const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setProducts(data))
    }, [])

console.log(products)


    return (
        <div>
            test product: {products.map((item) => <div><img width="50" src={item.image} alt="" /></div>)}
        </div>
    )
}

export default ProductList
