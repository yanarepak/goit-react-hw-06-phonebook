import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { status: '' },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setStatusFilter } = filterSlice.actions;
