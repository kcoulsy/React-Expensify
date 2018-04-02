import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id

});
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
});
//SET_START_DATE
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});
//SET_END_DATE
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});

//Expenses Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id })=> id !== action.id );
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          };
        }
        return expense;
      });
    default:
      return state;
  }
};

//Filters Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy
      };
    case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: action.sortBy
        };
    case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.date
        };
    case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.date
        };
    default:
      return state;
  }
};

//timestamps (milliseconds)
//Jan 1st 1970 (unix epoch)


//Get visible Expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    //console.log(startDateMatch, endDateMatch);
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b)=>{
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}



//Store Creation
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

store.subscribe(() =>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const exp1 = store.dispatch(addExpense({description: 'rent', amount: 200, createdAt: 1001}));
const exp2 = store.dispatch(addExpense({description: 'coffee', amount: 2000, createdAt: 1002}));

//
// store.dispatch(removeExpense({id: exp1.expense.id}));
//
// store.dispatch(editExpense(exp2.expense.id, { amount: 500 }));
//
// store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-125));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(125));
// store.dispatch(setEndDate());
//
// const demoState = {
//   expenses: [{
//     id: 'skldjfa',
//     description: 'Jan rent',
//     notes: 'This was the final payment for the address',
//     amount: 10000,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', //date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };
//
// const user = {
//   name: 'kristian',
//   age: 22
// };
// console.log({
//   ...user,
//   loc: 'halifax',
//   age: 23
// });
