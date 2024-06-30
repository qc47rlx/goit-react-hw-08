import css from './ContactList.module.css';
import ContactItem from '../Contact/Contact';
import { useSelector } from "react-redux";
import { visibleContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filterContacts = useSelector(visibleContacts);

  return (
    <ul className={css.list}>
      {filterContacts.map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
}