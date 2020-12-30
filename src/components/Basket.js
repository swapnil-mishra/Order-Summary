import React from 'react';

export default function Basket(props){
    const {countCartItems} = props;
    const {cartItems} = props;
    //checkout summary
    const itemsPrice = cartItems.reduce((a,c) => a+c.price*c.qty, 0);
    const discount = cartItems.reduce((a,c)=>a+c.discount*0.01*c.price*c.qty, 0);
    const typediscount=cartItems.filter(({type})=>type === 'fiction').reduce((a,c) => a+c.price*c.qty*0.15, 0);
    const totalPrice = itemsPrice -discount -typediscount;
    return (
    <aside className="block col-1">
    <div className="tot">
        <h3>Total</h3>
        {cartItems.length !==0 && (
            <>
            <div className="row">
                <div className="col-2">
                Items{''}
                {countCartItems? (
                    <button className="badge">({countCartItems})</button>
                ):(
                    ''
                )}
                
                </div>
                <div className="col-1 text-right">: &nbsp;&nbsp;${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2">Discount</div>
                <div className="col-1 text-right">: &nbsp;&nbsp;-&nbsp;${discount.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2">Type discount</div>
                <div className="col-1 text-right">: &nbsp;&nbsp;-&nbsp;${typediscount.toFixed(2)}</div>
            </div><br></br>
            <div className="row totview">
                <div className="col-2"><strong>Order total</strong></div>
                <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong></div>
            </div>
            </>
        )}
        </div>
    </aside>
    );
}