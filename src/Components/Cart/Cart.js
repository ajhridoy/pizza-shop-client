import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    return (
        <div>
          <div className="row">
            <div className='col-md-6'>
                <h2 style={{fontSize: '30px'}}>My Order</h2>
                {cartItems.map(item => {
                    return <div className="flex-container">
                    <div>
                        <h1>{item.name} [{item.varient}]</h1>
                        <p>Price: {item.quantity} * {item.prices[0][item.varient]} = ${item.price}</p>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                })}
                
            </div>
            <div className='col-md-4'>

            </div>
          </div> 
        </div>
    );
};

export default Cart;<h1>This is card</h1>