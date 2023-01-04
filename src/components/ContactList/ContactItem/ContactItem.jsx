import { deleteContact } from 'redux/contactsSlice';
import { Button } from '../ContactList.styled';
import { ContactName, ContactTel } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactsItem = () => {
  const dispatch = useDispatch();
  const { name, number } = useSelector(getContacts);
  return (
    <>
      <ContactName>{name}</ContactName>
      <ContactTel href="tel:{number}">{number}</ContactTel>
      <Button type="button" onClick={() => dispatch(deleteContact(name))}>
        Delete
      </Button>
    </>
  );
};
