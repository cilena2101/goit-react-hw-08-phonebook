import { useState } from 'react';
import { authOperations } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import css from '../../components/styles.module.css';

const SingUpPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(authOperations.signup({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    toast.success('Successful registration')
  };

return (
    <div className={css.container}>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} className={css.form_container}>
        <div className={css.form_item}>
          <label htmlFor="exampleInputName" className={css.form_label}>
            Name
          </label>
          <input
            name="name"
            type="text"
            className={css.form_control}
            placeholder="Enter name"
            id="exampleInputName"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className={css.form_item}>
          <label htmlFor="exampleInputEmail" className={css.form_label}>
            Login
          </label>
          <input
            name="email"
            type="email"
            className={css.form_control}
            placeholder="Enter email"
            id="exampleInputEmail"
            onChange={handleChange}
            value={email}
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
            id="exampleInputPassword"
            placeholder="Enter password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <button
          type="submit"
          className={css.btn}
          disabled={!email || !password}
        >
          Registration
        </button>
      </form>
    </div>
  );
};
export default SingUpPage;
