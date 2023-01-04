import { BsTelephone, BsPerson } from 'react-icons/bs';
import { Button, Form, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { name, number } = useSelector(getContacts);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   console.log(value);
  //   switch (name) {
  //     case 'name':
  //       name(value);
  //       break;
  //     case 'number':
  //       number(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    dispatch(addContact(name.value, number.value));

    e.target = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <BsPerson />
        <Input
          type="text"
          name="name"
          value={name}
          // onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <BsTelephone />
        <Input
          type="tel"
          name="number"
          value={number}
          // onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     const { name, number } = event.target.elements;
//     this.props.onSubmit(name.value, number.value);

//     this.formReset();
//   };

//   formReset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label>
//           <BsPerson />
//           <Input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>
//         <Label>
//           <BsTelephone />
//           <Input
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>

//         <Button type="submit">Add contact</Button>
//       </Form>
//     );
//   }
// }
