import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';

export interface UserState {
  _id: string;
  name: string;
  profileImg: string | null;
}

const user1: UserState = {
  _id: 'abc',
  name: '박재원',
  profileImg: null,
};

const user2: UserState = {
  _id: 'ccc',
  name: '이희원',
  profileImg: 'god',
};

const users: UserState[] = [user1, user2];

const initialState: UserState = user1;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      const foundUser = users.find((user) => user._id === action.payload); // 사용자배열에서 내가 찾는 _id와 같은 _id를 갖는 요소를 찾는다.
      // 상태 변경
      if (foundUser) {
        state._id = foundUser._id;
        state.name = foundUser.name;
        state.profileImg = foundUser.profileImg;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
