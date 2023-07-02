import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import css from '../../components/styles.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.container}>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} className={css.form_container}>
        <div className={css.form_item}>
          <label htmlFor="exampleInputEmail" className={css.form_label}>
            Email address
          </label>
          <input
            name="email"
            type="email"
            className={css.form_control}
            placeholder="Enter login"
            id="exampleInputEmail"
            onChange={handleChange}
            value={email}
            required
          />
        </div>
        <div className={css.form_item}>
          <label htmlFor="exampleInputEmail" className={css.form_label}>
            Password
          </label>
          <input
            name="password"
            type="password"
            className={css.form_control}
            placeholder="Enter password"
            id="exampleInputPassword"
            onChange={handleChange}
            value={password}
            required
          />
        </div>
        <button
          type="submit"
          className={css.btn}
          disabled={!email || !password}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
