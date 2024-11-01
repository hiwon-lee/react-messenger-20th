import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useLocalStorage } from '@hooks/useLocalStorage';

import userList from '../../data/users.json';
import { ChatInterface, MessageInterface } from '@interface/ChatInterface';
import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatForm from './ChatForm';
import { useEffect } from 'react';
import { MemberListItem } from '@components/MemberListItem';
import Header from '@components/common/Header';
import { MainButton } from '@components/Button';
import BottomMenu from '@components/common/BottomMenu';
import Main from '@components/common/MainContent';
import StatusBar from '@components/common/StatusBar';
import Form from '@components/Form';

export default function Chat() {
  const userName = useSelector((state: RootState) => state.user.name);

  // TODO : hook 분리하기
  const searchMember = (text: string) => {
    alert(text);
  };

  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <Header title="채팅" />
      <Main>
        <div className="flex gap-4 justify-between h-23 mx-5 my-3  bg-border-l-rose-700 ">
          <Form
            key="searchForm"
            onSubmit={(text: string) => searchMember(text)}
            placeHolder="검색"
          />
        </div>
        <div className="flex justify-center">
          <MainButton
            type="button"
            children="박"
          />
        </div>
        {userList.map((user, idx) => (
          <MemberListItem
            key={user.id}
            _id={user.id}
            name={user.userName}
            lastMessage="꺼져"
            lastTimeStamp="오후 10:34"
          />
          //   <MemberListItem
          //     _id={user.id}
          //     name={user.userName}
          //     profileImg={user.profileImg}
          //   />
        ))}
      </Main>

      <BottomMenu />
    </div>
  );
}
