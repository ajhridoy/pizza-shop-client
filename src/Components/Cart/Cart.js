import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from '../../action/cartAction';

const Cart = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    let subTotal = cartItems.reduce((x, item) => x+ item.price, 0)
    const dispatch = useDispatch()
    return (
        <div>
          <div className="row">
            <div className='col-md-6'>
                <h2 style={{fontSize: '30px'}}>My Order</h2>
                {cartItems.map(item => {
                    return <div className="flex-container">
                    <div className='text-start m-1 w-100'>
                        <h1>{item.name} [{item.varient}]</h1>
                        <p>Price: {item.quantity} * {item.prices[0][item.varient]} = ${item.price}</p>
                        <h1 style={{display: 'inline'}}>Quantity: </h1>
                        <FaPlus className='plus' onClick={() => {dispatch(addToCart(item, item.quantity+1, item.varient))}}></FaPlus>
                        <b>{item.quantity}</b>
                        <FaMinus className='minus' onClick={() => {dispatch(addToCart(item, item.quantity-1, item.varient))}}></FaMinus>
                        <hr />
                    </div>
                    <div className='m-1 w-100'>
                        <img src={item.img} alt="" style={{height: '80px', width: '80px'}}/>
                    </div>
                    <div className='m-1 w-100'>
                      <FaTrash style={{color: 'red', marginTop: '40px', cursor: 'pointer'}} onClick={() => {dispatch(deleteFromCart(item))}}></FaTrash>
                    </div>
                </div>
                })}
                
            </div>
            <div className='col-md-4 text-end'>
                <h2 style={{fontSize: '45px'}}>Subtotal: ${subTotal}</h2>
                <button className='btn'>Check Out</button>
            </div>
          </div> 
        </div>
    );
};

export default Cart;<h1>This is card</h1>