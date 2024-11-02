import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useLocalStorage } from '@hooks/useLocalStorage';

import defaultUserData from '@data/users.json';
import { ChatData, MessageInterface } from '@interface/ChatInterface';
import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatForm from './ChatForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserInterface } from '@interface/UserInterface';
import useChatMessages from '@hooks/useChatMessages';

export default function ChatRoom() {
  const { chatData, addMessage } = useChatMessages();
  const userName = useSelector((state: RootState) => state.user.name);
  // URL에서 userId 가져오기
  const { userId } = useParams<{ userId: string }>();
  // TODO : param으로 넘어온 id를 가지고 localstorage에 있는 사용자 정보 가져오기
  const [members, setMembers] = useLocalStorage<UserInterface[]>({
    key: 'members',
    initialValue: defaultUserData,
  });
  //   const friendName = members.find((member) => member.id === userId)?.userName;

  const friendName: UserInterface | undefined = members.find(
    (member) => member.id == userId
  );
  const [friendMessages, setFriendMessages] = useState<MessageInterface[]>([]);

  // TODO : 사용자에 해당하는 채팅메시지들 가져와

  // TODO : 화면에 렌더링
  // 새로운 메시지를 추가하는 함수
  const handleAddMessage = (text: string) => {
    if (!userId) return;

    const newMessage = {
      sender: userName || 'me',
      message: text,
      timeStamp: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      date: new Date().toISOString().split('T')[0],
      emoji: undefined,
    };

    addMessage(userId, newMessage);
  };

  // TODO : 메시지 던지면 로컬스토리지에 업데이트

  useEffect(() => {
    console.log(chatData);
    if (userId && chatData[userId]) {
      setFriendMessages(chatData[userId]);
      console.log(friendMessages);
    } else {
      console.log('userId에 해당하는 값이 없습니다.');
    }
  });

  return (
    <div className="h-full flex flex-col">
      <ChatHeader />
      방이다.
      <ChatMain
        id={userId || ''}
        sender={userName || ''}
        messages={friendMessages}
      />
      <ChatForm addMessage={handleAddMessage} />
    </div>
  );
}
