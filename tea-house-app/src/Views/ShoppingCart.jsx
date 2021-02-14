import React from 'react'

export default function ShoppingCart(props) {
    //passed the props in App.jsx
    const {cartItems, onAdd, onRemove} = props;
    const TotalPrice = cartItems.reduce((acc, current_item) => acc + current_item.price * current_item.qty, 0);
    console.log("CartItems"+ cartItems);
    return (
        <div>
            <h1>Cart Items</h1>
            {/* Conditional rendering to check if cartItems array is empty */}
            <div>{cartItems.length === 0 && <h2>Your Cart is Empty</h2>}</div>
            {/* mapping through cartItems to display values of items from the cartItems objects */}
                {cartItems.map((item) => (
                    // setting key here to prevent error
                    <div key={item.id}>
                        <div>{item.name}</div>

                        <div>
                            {/* toFixed function formats a number using fixed-point notation */}
                            {item.qty} X {item.price.toFixed(2)}
                        </div>

                        <div>
                            <button onClick={() => onAdd(item)}>
                                +
                            </button>
                            <button onClick={() => onRemove(item)}>
                                -
                            </button>
                        </div>
                        
                    </div>
                ))}
                {cartItems.length !==0 && (
                        <>
                        <hr/>
                        <div>Total Price</div>
                        <div>{TotalPrice.toFixed(2)}</div>
                        </>
                    )}
        </div>
    )
}
