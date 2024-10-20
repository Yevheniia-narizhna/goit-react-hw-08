import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectContact } from "../contacts/selectors";
import { selectFilter } from "./selectors";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeSearch: (state, action) => {
      state.name = action.payload;
    },
  },
});

// export const selectFilter = (state) => state.filters.name;
export const filterReducer = filtersSlice.reducer;
export const { changeSearch } = filtersSlice.actions;

export const selectFilteredContacts = createSelector(
  [selectContact, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);
