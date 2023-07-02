import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import defaultAvatar from './default-avatar.png.png';
import css from '../styles.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={css.user_container} >
      <img src={avatar} alt='avatar' width='36'/>
      <p>Welcome, </p>
      <p>{name} </p>
      <button type='button' className={css.btn} onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </button>
    </div>
  );
}