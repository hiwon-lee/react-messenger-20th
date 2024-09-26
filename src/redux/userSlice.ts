import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  _id: string;
  name: string;
  profileImg: string | null;
}

const initialState: UserState = {
  _id: 'abc',
  name: '박재원',
  profileImg: null,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.profileImg = action.payload.profileImg;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions;

export default counterSlice.reducer;
