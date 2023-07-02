import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-slice';
import contactsOperations from 'redux/contacts/contacts-operations'; 

export const useContacts = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.loader);
  const error = useSelector(state => state.contacts.error);

  const setFilter = value => {
    dispatch(changeFilter(value));
  };

  const getContacts = () => {
    dispatch(contactsOperations.getContacts());
  };

  const addContact = data => {
    dispatch(contactsOperations.addContact(data));
  };

  const deleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return {
    filter,
    contacts,
    isLoading,
    error,
    setFilter,
    getContacts,
    addContact,
    deleteContact,
  };
};
