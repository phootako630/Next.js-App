import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import data from './pages/api/data.json';

// initial state
const startState = {
    cards: []
};

// actions
export const initialCards = () => {
    return {
        type: 'INITIAL_CARDS',
        cards: data
    };
};
export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        item
    };
}
// reducer
export const reducer = (state = startState, action) => {
    switch (action.type) {
        case 'INITIAL_CARDS':
            return {
                cards: action.cards,
            }
        case 'ADD_ITEM':
            return {
                ...state,
                cards: [...state.cards, action.item],
            }
        default: return state;
    }
}

// create store
const store = (initialState = startState) => {
    return createStore(reducer, initialState);
};

export const initStore = createWrapper(store);