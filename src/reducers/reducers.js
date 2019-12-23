import {
    ADD_TO_CART,
    PASS_ID,
    RANDOM_CLOTHES,
    REMOVE_ITEM,
    ADD_QUANTITY,
    SUB_QUANTITY,
    ADD_SHIPPING,
    SUB_SHIPPING,
    RESET_FILTERS
} from '../actions/actions';
import clothes from '../data/data.json';

//State
const initialState = {
    items: clothes,
    addedItems: [],
    total: 0,
    clickedProduct: [],
    cartItems: 0,
};

const reducer = (state = initialState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price,
                cartItems: state.cartItems + 1
            }
        } else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
                cartItems: state.cartItems + 1
            }

        }
    }

    if (action.type === PASS_ID) {
        let clickedProduct = state.items.find(item => item.id === action.id)
        return {
            ...state,
            clickedProduct: [clickedProduct]
        }
    }

    // if (action.type === RANDOM_Clothes) {
    //     let randomProduct = state.items.find(item => item.id === action.id)
    //     return {
    //         ...state,
    //         randomProduct: [randomProduct]
    //     }
    // }

    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal,
            cartItems: state.cartItems - itemToRemove.quantity
        }
    }
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal,
            cartItems: state.cartItems + 1
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                cartItems: state.cartItems - 1
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal,
                cartItems: state.cartItems - 1
            }
        }

    }
    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 20
        }
    }
    if (action.type === SUB_SHIPPING) {
        if (state.addedItems === []) {
            return {
                ...state,
                total: 0.00
            }
        }
        return {
            ...state,
            total: state.total - 20
        }
}

    if (action.type === RESET_FILTERS) {
        var sortedById = initialState.items.sort((a, b) => (a.id - b.id))
        return {
            ...state,
            items: sortedById
        }
    }
    return state
}

export default reducer;