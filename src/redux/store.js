import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Products from '../path/data/data.json';

//import reducers
// import products from './productsRedux';

const rootReducer = combineReducers({
    products: Products,
});

//create store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;