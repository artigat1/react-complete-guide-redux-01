const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

const types = {
    incCounter: 'INC_COUNTER',
    addCounter: 'ADD_COUNTER'
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.incCounter:
            return {
                ...state,
                counter: state.counter + 1
            };
            
        case types.addCounter:
            return {
                ...state,
                counter: state.counter + action.value
            };
            
        default:
            return state;
    }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('subscription', store.getState());
});

// Dispatching Action
store.dispatch({type: types.incCounter});
store.dispatch({type: types.addCounter, value: 10});
console.log(store.getState());
