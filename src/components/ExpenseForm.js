import React from 'react'
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calFocused: false,
      errorState: ''
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=>({ description }));
  };
  onNoteChange = (e) => {
     const note = e.target.value;
     this.setState(()=> ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(()=>({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    //Prevent deleting the date field
    if(createdAt) {
      this.setState(()=>({ createdAt }));
    }
  };
  onFocusChange = ({focused}) => {
    this.setState(()=> ({ calFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      //Set error state to 'Please provide description and amount'
      this.setState(()=> ({ errorState: 'Please provide both description and amount!' }));
    } else {
      //Clear the error
        this.setState(()=> ({ errorState: '' }));
        //passing up the date to AddExpensePage
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }
  render() {
    return (

        <form className="form" onSubmit={this.onSubmit}>
          {this.state.errorState && <p className="form__error">{this.state.errorState}</p>}
          <input
            type="text"
            placeholder="Description"
            className="text-input"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />
          <input
            type="text"
            placeholder="Amount"
            className="text-input"
            value={this.state.amount}
            onChange={this.onAmountChange}
            />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calFocused}
            onFocusChange={this.onFocusChange}
            />
          <textarea
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange}
            className="textarea-input">
          </textarea>
          <div>
            <button type="" className="button">Add Expense</button>
          </div>
          </form>

    )
  }
}
