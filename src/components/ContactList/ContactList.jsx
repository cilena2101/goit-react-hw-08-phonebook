import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContacts } from '../Hooks/hooks';
import { contactsOperations } from '../../redux/contacts/contacts-operations';
import authSelectors from 'redux/auth/auth-selectors'; 
import css from '../styles.module.css';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();
  const { contacts, isLoading, filter, deleteContact, setFilter } =
    useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <div>
      {isLoading && <Loader />}
      {isLoggedIn && (
        <ul className={css.contact_wrap} >
          {contacts && filteredContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={css.contact_item} >
                <div className={css.contact_item}>
                  <h3 className={css.contact_name} >{name}:</h3>
                  <p>{number}</p>
                </div>
                <button
                  type="button"
                  className={css.btn_contact}                 
                  onClick={() => {
                    deleteContact(id);
                    setFilter('');
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
