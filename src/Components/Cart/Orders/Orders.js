import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders } from '../../../action/orderAction';
import Error from '../../Error/Error';
import Loading from '../../Loading/Loading';

const Orders = () => {
    const dispatch = useDispatch()
    const orderState = useSelector(state => state.getUserOrdersReducer)
    const {orders, error, loading} = orderState
    useEffect(() => {
        dispatch(getUsersOrders())
    },[])
    return (
        <div>
            <h2 style={{fontSize: '38px'}}>My Orders</h2>
            <div className="row justify-content-center">
                {loading && <Loading></Loading>}
                {error && <Error></Error>}
                {orders && orders.map(order => {
                    return <div className="col-md-8 my-3 rounded" style={{backgroundColor: 'red', color: 'white'}}>
                        <div className="flex-container">
                            <div className='text-start w-100 m-1'>
                                <h2 style={{fontSize: '25px'}}>Items</h2>
                                <hr />
                                {order.orderItems.map(item => {
                                    return <div>
                                        <p>{item.name} [{item.varient}] * {item.quantity} = ${item.price}</p>
                                    </div>
                                })}
                            </div>
                            <div className='text-start w-100 m-1'>
                              <h2 style={{fontSize: '25px'}}>Address</h2>
                              <hr />
                                <p>Street: {order.shippingAddress.street}</p>
                                <p>City: {order.shippingAddress.city}</p>
                                <p>Country: {order.shippingAddress.country}</p>
                                <p>Postal Code: {order.shippingAddress.pincode}</p>
                            </div>
                            <div className='text-start w-100 m-1'>
                            <h2 style={{fontSize: '25px'}}>Order Info</h2>
                            <hr />
                            <p>Order Amount: {order.orderAmount}</p>
                            <p>Date: {order.createdAt.substring(0, 10)}</p>
                            <p>TransactionID: {order.transactionId}</p>
                            <p>OrderID: {order._id}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Orders;