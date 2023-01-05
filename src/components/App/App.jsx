import { Box, ContactsTitle, NoContacts, PhonebookTitle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log(contacts);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />

      {filterContacts.length > 0 ? (
        <ContactsList contacts={filterContacts} />
      ) : (
        <NoContacts>You have no contacts</NoContacts>
      )}
    </Box>
  );
};
