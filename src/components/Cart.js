import React from 'react';

export default function Cart(props){
    const {countCartItems} = props;
    const {cartItems, onAdd, onRemove, onDelete} = props;
    return(
        <aside className="col-2 tot1">
        <div className="row col-2">
            <div className="col-m1">
            Items{''}
                {countCartItems? (
                    <button className="badge">({countCartItems})</button>
                ):(
                    ''
                )}
            </div>
            <div className="col-m2">Qty</div>
            <div className="col-m2">Price</div>
        </div>
        <hr></hr>
        <div>
            {cartItems.length === 0 && <div>Cart is empty.</div>}
        </div>
        {cartItems.map((item)=>(
            <div key={item.id} className="row">
            <button onClick={()=>onDelete(item)} className="col-m0 left"><img className="left" src="https://place-hold.it/40.jpg" alt="img"></img>
            <h3>&nbsp; &nbsp;{item.name}<span className="text-right">X</span></h3>
                </button>
            <div className="col-m2">
                <button onClick={()=>onAdd(item)} className="add">
                <h3>+</h3>
                </button><button className="qty"><h3>{item.qty}</h3></button>
                <button onClick={()=>onRemove(item)} className="remove">
                <h3>-</h3>
                </button>
            </div>
            <div className="col-m2">
                &nbsp;&nbsp;<h3>${item.qty*item.price.toFixed(2)}</h3>
            </div>

            </div>
        ))}
    </aside>
    );
}