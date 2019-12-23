export const ADD_TO_CART = "ADD_TO_CART";
export const PASS_ID = "PASS_ID";
export const RANDOM_BIKE = "RANDOM_Clothes";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const ADD_SHIPPING = 'ADD_SHIPPING';
export const SUB_SHIPPING = 'SUB_SHIPPING';
export const UPDATE_CART = 'UPDATE_CART';
export const RESET_FILTERS = 'RESET_FILTERS';
export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const passID = id => {
    return {
        type: PASS_ID,
        id
    }
}

export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}

export const addShipping = id => {
    return {
        type: ADD_SHIPPING,
        id
    }
}

export const subtractShipping = id => {
    return {
        type: SUB_SHIPPING,
        id
    }
}

export const resetFilters = () => {
    return {
        type: RESET_FILTERS,
    }
}