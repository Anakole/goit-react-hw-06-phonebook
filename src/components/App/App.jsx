import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { Box, ContactsTitle, NoContacts, PhonebookTitle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    const conditionCheckName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const conditionCheckNumber = contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );

    if (conditionCheckName || conditionCheckNumber) {
      alert(`This name or number is already in your contacts`);
    } else {
      setContacts(state => [newContact, ...state]);
    }
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  const deleteContact = name => {
    setContacts(state =>
      state.filter(contact => contact.name.toLowerCase() !== name.toLowerCase())
    );
  };

  return (
    <Box>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onSubmit={formSubmit} />

      <ContactsTitle>Contacts</ContactsTitle>

      {contacts.length > 0 ? (
        <>
          <Filter value={filter} onChange={changeFilter} />
          <ContactsList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        </>
      ) : (
        <NoContacts>You have no contacts</NoContacts>
      )}
    </Box>
  );
};
