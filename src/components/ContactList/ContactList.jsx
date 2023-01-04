import { ContactsItem } from './ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id }) => (
        <Item key={id}>
          <ContactsItem />
        </Item>
      ))}
    </List>
  );
};
