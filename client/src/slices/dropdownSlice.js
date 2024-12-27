import { createSlice } from '@reduxjs/toolkit';

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: {
    isOpen: false
  },
  reducers: {
    toggleDropdown: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeDropdown: (state) => {
      state.isOpen = false;
    }
  }
});

export const { toggleDropdown, closeDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;