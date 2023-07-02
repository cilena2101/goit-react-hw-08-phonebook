import { ContactForm } from 'components/ContactForm/ContactForm'; 
import { ContactList } from 'components/ContactList/ContactList';  
import { Filter } from 'components/Filter';
import css from '../../components/styles.module.css';

const Contacts = () => {
  return (
    <div className={css.contacts_container}>
      <h2 className={css.contact_title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.cont_title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;