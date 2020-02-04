import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Products from './productsData';


const rootReducer = combineReducers({
    products: Products,
});

//create store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;