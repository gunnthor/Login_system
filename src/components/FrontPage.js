import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => (
  <div>
    <h1> Welcome to Eylenda! </h1>
    <h3>Sign up now! it's free!</h3>
    <div>
      <Link className="button" to="/signup-company">Sign up as a company!</Link>
      <Link className="button" to="/signup-promoter">Sign up as a company!</Link>
    </div>
  </div>
);

export default FrontPage;