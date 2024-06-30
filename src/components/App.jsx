import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Loader from './Loader/Loader';
import { fetchContacts } from "../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { selectError, selectLoading } from "../redux/selectors";

function App() {
 const dispatch = useDispatch();
 const isLoading = useSelector(selectLoading);
 const isError = useSelector(selectError);

 useEffect(() => {
   dispatch(fetchContacts());
 }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <Loader>Loading message</Loader>}
        {isError && <ErrorMessage />}
      </div>
    </>
  );
}

export default App;