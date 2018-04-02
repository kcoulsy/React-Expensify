//Higher order component (HOC)
//A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  return (<div>
    <h1>Info</h1>
    <p>This info is {props.info}</p>
  </div>)
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private! don't share</p>}

      <WrappedComponent {...props}/>
    </div>)

};

const AdminInfo = withAdminWarning(Info);

const requireAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth && <p>You are authenticated</p>}
      <WrappedComponent {...props}/>
    </div>
  )
};

const AuthInfo = requireAuth(Info);

ReactDOM.render(<AuthInfo isAuth={false} info="details" />, document.getElementById('app'));
