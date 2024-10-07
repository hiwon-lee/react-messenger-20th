import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatInterface } from '@pages/Chat/ChatInterface';

// 임시 데이터
import defaultMessages from '../data/messages.json';

// 우선은 임시 데이터 활용 -> 이후, localStorage에서 가져온 데이터
const initialState: ChatInterface[] = defaultMessages;

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setEmoji: (state, action: PayloadAction<{ id: string; emoji: string }>) => {
      const { id, emoji } = action.payload;
      const message = state.find((item) => item.id === id);

      if (message) {
        message.emoji = emoji;
      }
    },
  },
});

export const { setEmoji } = messageSlice.actions;
export default messageSlice.reducer;
