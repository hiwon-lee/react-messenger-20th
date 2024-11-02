import { useDispatch, useSelector } from 'react-redux';
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
import { toggleUser } from '@redux/userSlice';

export default function ChatRoom() {
  const mainUser = useSelector((state: RootState) => state.user.mainUser);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const { chatData, addMessage, getLastMessagePreview } = useChatMessages();
  // users.json에 있는 사용자들의 ID정보를 배열로 가져오는 함수

  // URL에서 userId 가져오기
  const { userId } = useParams() as { userId: string };
  // TODO : param으로 넘어온 id를 가지고 localstorage에 있는 사용자 정보 가져오기
  const [members, setMembers] = useLocalStorage<UserInterface[]>({
    key: 'members',
    initialValue: defaultUserData,
  });

  const friend = members.find((member) => member.id == userId);
  const friendName = friend?.userName || '';
  const [friendMessages, setFriendMessages] = useState<MessageInterface[]>([]);

  // TODO : 사용자에 해당하는 채팅메시지들 가져와

  // TODO : 화면에 렌더링
  // 새로운 메시지를 추가하는 함수
  const handleAddMessage = (text: string) => {
    if (!userId) return;
    const senderType = currentUser.id !== mainUser.id ? 'me' : 'you';

    const newMessage = {
      sender: senderType,
      message: text,
      timeStamp: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      date: new Date().toISOString().split('T')[0],
      emoji: undefined,
    };
    console.group(newMessage);
    console.group(currentUser);

    addMessage(userId, newMessage);
  };

  // TODO : 메시지 던지면 로컬스토리지에 업데이트

  useEffect(() => {
    if (userId && chatData[userId]) {
      setFriendMessages(chatData[userId]);
    } else {
      console.log('userId에 해당하는 값이 없습니다.');
    }
  });

  useEffect(() => {
    console.log('Updated currentUser:', currentUser);
  }, [currentUser]);

  const lastMessageInfo = getLastMessagePreview(userId);
  // 프로필 클릭 이벤트로 사용자 전환

  const dispatch = useDispatch();

  const handleProfileClick = () => {
    if (friend) dispatch(toggleUser(friend));
  };

  return (
    <div className="h-full flex flex-col">
      <ChatHeader
        friend={
          friend || {
            id: '',
            userName: '알 수 없음',
            profileImg: '',
            isOnline: false,
          }
        }
        lastMessageTimeStamp={lastMessageInfo.timeStamp}
        onProfileClick={handleProfileClick}
      />
      <ChatMain
        id={userId || ''}
        sender={friendName || ''}
        messages={friendMessages}
      />
      <ChatForm addMessage={handleAddMessage} />
    </div>
  );
}
