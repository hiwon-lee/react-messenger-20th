import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useLocalStorage } from '@hooks/useLocalStorage';

import defaultMessages from '../../data/messages.json';
import { ChatInterface } from '@interface/ChatInterface';
import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatForm from './ChatForm';

export default function Chat() {
  const userName = useSelector((state: RootState) => state.user.name);

  const [messages, setMessages] = useLocalStorage({
    key: 'messages',
    initialValue: defaultMessages,
  });

  // addMessage : 메시지 저장 로직 추가 -> localStorage에 차곡히 쌓음
  const addMessage = (text: string) => {
    const now = new Date();
    const newMessage: ChatInterface = {
      id: now.toISOString(), // 고유 ID로 ISO string
      userName: userName,
      receiver: 'receiver', // 이거 바꿔야 돼
      content: text,
      timeStamp: now.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      }), // HH:MM
      date: now.toISOString().split('T')[0], // YYYY-MM-DD
      emoji: undefined, // 이모지 없음
    };

    setMessages([...messages, newMessage]);
  };
  return (
    <div className="h-full flex flex-col">
      <ChatHeader />
      <ChatMain messages={messages} />
      <ChatForm addMessage={(text: string) => addMessage(text)} />
    </div>
  );
}
