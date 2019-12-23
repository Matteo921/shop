import {
    ADD_TO_CART,
    REMOVE_ITEM,
    FILTER_BY_SPORT,
    FILTER_BY_SUMMER,
    FILTER_BY_ELEGANCE,
    FILTER_BY_CASUAL,
    SPORT_REMOVED,
    SUMMER_REMOVED,
    ELEGANCE_REMOVED,
    CASUAL_REMOVED,
} from '../actions/actions';
import clothes from '../data/data.json';

import clothes from '../data/data.json';

/*Actions*/
export const ADD_TO_CART = createActionName('ADD_TO_CART');

/*Action Name Creator*/
const createActionName = name => `app/${reducerName}/${name}`;

/*State*/
const initialState = [];

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        default: return statePart;
    }
} 