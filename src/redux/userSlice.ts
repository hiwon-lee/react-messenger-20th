import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import profile from '@assets/profile.png';
import { ReceiverState } from 'interface/ChatInterface';

// 예시 사용자 : data
const user1: ReceiverState = {
  _id: 'abc',
  name: '박재원',
  profileImg: undefined,
};

const user2: ReceiverState = {
  _id: 'ccc',
  name: '이희원',
  profileImg: profile,
};

// 사용자 배열 : data
const users: ReceiverState[] = [user1, user2];

// initialState : 사용자 초기화
const initialState: ReceiverState = user1;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      const foundUser = users.find((user) => user._id === action.payload); // 사용자배열에서 내가 찾는 _id와 같은 _id를 갖는 요소를 찾는다.
      // receiver 상태 변경
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
