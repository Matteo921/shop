export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const FILTER_BY_Sport = 'FILTER_BY_SPORT';
export const SPORT_REMOVED = 'RISERS_SPORT';
export const FILTER_BY_SUMMER = 'FILTER_BY_SUMMER';
export const SUMMER_REMOVED = 'SUMMER_REMOVED';
export const FILTER_BY_ELEGANCE = 'FILTER_BY_ELEGANCE';
export const ELEGANCE_REMOVED = 'ELEGANCE_REMOVED';
export const FILTER_BY_CASUAL = 'FILTER_BY_CASUAL';
export const CASUAL_REMOVED = 'CASUAL_REMOVED';

export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const filterBySport = () => {
    return {
        type: FILTER_BY_SPORT,
    }
}

export const sportRemoved = () => {
    return {
        type: SPORT_REMOVED,
    }
}

export const filterBySummer = () => {
    return {
        type: FILTER_BY_SUMMER,
    }
}

export const summerRemoved = () => {
    return {
        type: SUMMER_REMOVED,
    }
}

export const filterByElegance = () => {
    return {
        type: FILTER_BY_ELEGANCE,
    }
}

export const eleganceRemoved = () => {
    return {
        type: ELEGANCE_REMOVED,
    }
}
export const filterByCasual = () => {
    return {
        type: FILTER_BY_Casual,
    }
}

export const casualRemoved = () => {
    return {
        type: Casual_REMOVED,
    }
}
