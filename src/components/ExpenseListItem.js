import React from 'react';
import {Link} from 'react-router-dom';
import numeral from 'numeral'
import moment from 'moment';
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
    <Link to={`/edit/${id}`} className="list-item">
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__subtitle">{moment(createdAt).format('Do MMMM YYYY')}</span>
      </div>
      <div>
        <h3 className="list-item__data">£{numeral(amount/100).format('0,0.00')}
        </h3>
      </div>
    </Link>
);

// const mapStateToProps = (state) => {
//   return {
//     expenses: state.expenses
//   };
// };
export default ExpenseListItem;
