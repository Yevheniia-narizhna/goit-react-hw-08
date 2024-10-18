import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/contacts/contactsOps";
// import { selectError, selectLoading } from "./redux/contactsSlice";
import { fetchContacts } from "./redux/contacts/operations";
import { selectError, selectLoading } from "./redux/contacts/slice";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
    // <>
    //   <div>
    //     <ContactForm />
    //     <SearchBox />
    //     {isLoading && <h2>Loading...</h2>}
    //     {isError && <h2>Error...</h2>}
    //     <ContactList />
    //   </div>
    // </>
  );
}

export default App;
