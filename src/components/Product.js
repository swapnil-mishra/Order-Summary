import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div>
            <img className="small" src="https://place-hold.it/40.jpg" alt={product.name}></img>
            <h3>{product.name}</h3>
            <div className="prod">
            <p>Id:&nbsp;{product.id}</p>
            <p>Type:&nbsp;{product.type}</p>
            <div>Price:&nbsp;${product.price}</div>
            <p>Discount:&nbsp;{product.discount}%</p>
            </div>
            <div>
                <button onClick={()=>onAdd(product)} >Add To Cart</button>
            </div>
        </div>
    )
}
