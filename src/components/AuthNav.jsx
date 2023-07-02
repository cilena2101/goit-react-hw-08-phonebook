import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './styles.module.css';

export default function AuthNav() {
  return (
    <div className={css.auth_nav}>
      <NavLink to="/singup" className={css.link_text}>
        Registration
      </NavLink>
      <NavLink  to="/login" className={css.link_text}
      >
        Log in
      </NavLink>
    </div>
  );
}