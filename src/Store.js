import {combineReducers} from 'redux'
import { createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getPizzaReducer } from './reducer/pizzaReducer';

const finalReducer = combineReducers({
    getPizzaReducer : getPizzaReducer
})
const initialState = {}

const composeEnhancer = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancer(applyMiddleware(thunk)));
 export default store;