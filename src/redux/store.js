import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filters/slice";
import { contactReducer } from "./contacts/slice";
// import { contactReducer } from "./contactsSlice";
// import { filterReducer } from "./filters/slice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    contacts: contactReducer,
  },
});
