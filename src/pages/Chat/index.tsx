import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useLocalStorage } from '@hooks/useLocalStorage';

import userList from '../../data/users.json';
import { ChatInterface, MessageInterface } from '@interface/ChatInterface';
import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatForm from './ChatForm';
import { useEffect } from 'react';
import MemberListItem from '@components/MemberListItem';
import Header from '@components/common/Header';
import { MainButton } from '@components/Button';
import BottomMenu from '@components/common/BottomMenu';

export default function Chat() {
  const userName = useSelector((state: RootState) => state.user.name);

  return (
    <div className="h-full flex flex-col">
      <Header title="채팅" />
      {userList.map((user, idx) => (
        <MemberListItem
          _id={user.id}
          name={user.userName}
          profileImg={user.profileImg}
        />
      ))}
      <BottomMenu />
    </div>
  );
}
