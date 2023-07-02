import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
      <h2>Welcome to the phonebook</h2>
      <div className={css.link_auth}>
        <NavLink to="/login" className={css.link}>Log in</NavLink>
            or
        <NavLink to="/singup" className={css.link}>Register</NavLink>
      </div>
    </div>
  );
};

export default HomePage;
