import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>404! Page not found.</p>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
