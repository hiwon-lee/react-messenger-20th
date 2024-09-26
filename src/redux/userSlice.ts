// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   _id: '',
//   name: '',
//   profile_img: '',
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state._id = action.payload._id;
//       state.name = action.payload.name;
//       state.profile_img = action.payload.profile_img;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { setUser, setToken, logout, setOnlineUser, setSocketConnection } =
//   userSlice.actions;

// export default userSlice.reducer;

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