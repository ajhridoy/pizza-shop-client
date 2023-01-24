import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../../action/orderAction';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Success from '../Success/Success';

const CheackOut = ({subTotal}) => {
    const orderState = useSelector((state) => state.placeOrderReducer)
    const {loading, error, success} = orderState
    const dispatch = useDispatch()
function tokenHandler(token){
    console.log(token)
    dispatch(placeOrder(token, subTotal))
}
    return (
        <div>
            {loading && <Loading></Loading>}
            {error && <Error error='Something Went Wrong'></Error>}
            {success && <Success success='Your Orders Placed Successfully'></Success>}
            <StripeCheckout
                amount={subTotal*100}
                shippingAddress
                stripeKey='pk_test_51M6Kg1K1vrlZjflD1JL7gMbcJY49jMRlD5aeBQrTny34zh7Dmjc4rhLzWIhtWRyh6WnTojI7awEZBCxK7QEtlNC800ucJUKPDL'
                token={tokenHandler}
            >

                <button className='btn'>Pay Now</button>
            </StripeCheckout>
        </div>
    );
};

export default CheackOut;