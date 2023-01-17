import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../../../action/pIzzaAction';
import PizzaCard from './PizzaCard';
import { getPizzaReducer } from '../../../reducer/pizzaReducer';

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
           <div className="row">
            {loading ? (<h1>Loading..</h1>) : error ? (<h1>Somthing went wrong</h1>) : (
                pizzas.map(pizza => {
                    return <div className="col-md-4">
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