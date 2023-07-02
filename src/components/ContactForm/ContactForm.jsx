import { useState } from 'react';
import toast from 'react-hot-toast';
import { useContacts } from 'components/Hooks/hooks';
import css from '../../components/styles.module.css';

export const ContactForm = () => {
  const { contacts, addContact } = useContacts();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
    // console.log(name, value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      toast.warn('Please enter a name and a number');
      return;
    }

  const enterContacts = contacts.some(
    contact =>
      (contact.name === name.toLowerCase() && contact.number === number) ||
      contact.number === number
  );

  if (enterContacts) {
    toast.error(`${name} or ${number} is already in contacts`);
  } else {
    addContact({ name, number });
    toast.success('The contact has been added to the list');
  }

  setName('');
  setNumber('');
};

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form_contact}>
        <label htmlFor="exampleInputName" className={css.form_label}>
          Name
          <input
            name="name"
            type="text"
            className={css.form_control}
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="exampleInputName" className={css.form_label}>
          Number
          <input
            name="number"
            type="tel"
            className={css.form_control}
            value={number}
            onChange={handleChange}
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.btn}>Add contact</button>
      </form>
    </div>
  );
};
