import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../../../action/pIzzaAction';
import PizzaCard from './PizzaCard';
import { getPizzaReducer } from '../../../reducer/pizzaReducer';
import Loading from '../../Loading/Loading';
import Error from '../../Error/Error';

const PizzaCards = () => {
   const dispatch = useDispatch()

    const pizzaState = useSelector(state => state.getPizzaReducer)
    const {pizzas, error, loading} = pizzaState
    useEffect(()=>{
        dispatch(getAllPizzas())
    },[])


    console.log(pizzas)
    return (
        <div>
           <div className="row justify-content-center">
            {loading ? (<Loading></Loading>) : error ? (<Error error='Something Went Wrong'></Error>) : (
                pizzas.map(pizza => {
                    return <div className="col-md-3 m-3">
                        <div>
                            <PizzaCard key={pizza._id} pizza={pizza}></PizzaCard>
                        </div>
                    </div>
                })
            )}
           </div>
        </div>
    );
};

export default PizzaCards;