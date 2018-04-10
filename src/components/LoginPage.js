import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
//No test case setup

const LoginPage = ({startLogin}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expense Manager</h1>
      <h3>Get your expenses under control</h3>
      <button className="button" onClick={startLogin}>Log in with google</button>
    </div>

  </div>
);
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(undefined, mapDispatchToProps)(LoginPage);
