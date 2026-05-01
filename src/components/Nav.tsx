import React from 'react'
import { User } from '../models/user';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Nav = (props: {user: User | null}) => {
  return (
    <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#/"
      >Company name</a>

      <ul className="my-2 my-md-0 mr-md-3">
        <Link to={'/profile'}
          className="p-2 text-white text-decoration-none">
          {props.user?.first_name} {props.user?.last_name}</Link>

        <Link to={'/login'} 
          className="p-2 text-white text-decoration-none"
          onClick={async () => await axios.post('api/admin/logout')}
        >Sign out</Link>

      </ul>

      {/* <ul className="navbar-nav px-3">
        <li className='nav-item text-nowrap'>
          <a className='nav-link' href="#/">Sign out</a>
        </li>
      </ul> */}

  </header>
  );
};

export default Nav;
