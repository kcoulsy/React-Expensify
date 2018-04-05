import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

//no test for remove

const EditExpensePage = (props) => {
  // console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense)=>{
          //Dispatch the action to edit the expenses//
          //redirect to the dashboard
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push('/');
          console.log('updated', expense);
        }}
        />
        <button onClick={() => {
          props.dispatch(startRemoveExpense({id: props.expense.id}));
          props.history.push('/');
          }}>Remove</button>
    </div>
  )
};

const mapStateToProps = (state, props) => {
   return {
     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
   };
};
export default connect(mapStateToProps)(EditExpensePage);
