import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import defaultMessages from '../../data/messages.json';

import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatForm from './ChatForm';

import { ChatInterface } from './ChatInterface';
import { useEffect } from 'react';

export default function Chat() {
  const userName = useSelector((state: RootState) => state.user.name);

  const [messages, setMessages] = useLocalStorage({
    key: 'messages',
    initialValue: defaultMessages,
  });

  // addMessage : 메시지 저장 로직 추가 -> localStorage에 차곡히 쌓음
  const addMessage = (text: string) => {
    const newMessage = {
      id: new Date().toString(),
      name: userName,
      sender: 'sender',
      content: text,
      timeStamp: new Date().toLocaleDateString,
    };

    setMessages([...messages, newMessage]);
  };
  return (
    <div className="text-sm">
      <ChatHeader />
      <ChatMain messages={messages} />
      <ChatForm addMessage={(text: string) => addMessage(text)} />
    </div>
  );
}
