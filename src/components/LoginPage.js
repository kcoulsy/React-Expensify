import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
//No test case setup

const LoginPage = ({startLogin}) => (
  <div>
    <h2>Log In Page</h2>
    <button onClick={startLogin}>Log in with google</button>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(undefined, mapDispatchToProps)(LoginPage);
