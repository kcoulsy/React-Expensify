import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});
const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count
});
const resetCount = () => ({
  type: 'RESET'
});

//Reducers
//1. are pure functions. Output only determined by the input
//2. Never change state or action directly
const countReducer = (state = {count:0}, action)=>{
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
        return {
          count: action.count
        }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
}

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 20}));
