import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useLocalStorage } from '@hooks/useLocalStorage';

import defaultMessages from '../../data/messages_1.json';
import { ChatInterface, MessageInterface } from '@interface/ChatInterface';
import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatForm from './ChatForm';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ChatRoom() {
  // URL에서 userId 가져오기
  const { userId } = useParams<{ userId: string }>();

  const userName = useSelector((state: RootState) => state.user.name);
  const initialMessages = defaultMessages as ChatInterface;

  const [savedMessage, setMessages] = useLocalStorage<ChatInterface>({
    key: 'chat_' + initialMessages.id,
    initialValue: initialMessages,
  });
  useEffect(() => {
    console.log(savedMessage);
  });

  // addMessage : 메시지 저장 로직 추가 -> localStorage에 차곡히 쌓음
  const addMessage = (text: string) => {
    const now = new Date();
    const sender = userName ? 'you' : 'me'; // TODO : 누가 보낸건지,, 로직 수정
    const messageData: MessageInterface = {
      sender: sender,
      message: text,
      timeStamp: now.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      }), // HH:MM
      date: now.toISOString().split('T')[0], // YYYY-MM-DD
      emoji: undefined, // 이모지 없음
    };
  };
  return (
    <div className="h-full flex flex-col">
      <ChatHeader />
      방이다.
      {/* <ChatMain messages={messages} /> */}
      <ChatForm addMessage={(text: string) => addMessage(text)} />
    </div>
  );
}
