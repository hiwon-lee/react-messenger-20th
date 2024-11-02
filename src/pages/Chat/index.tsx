import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

import userList from '@data/users.json';
import Header from '@components/common/Header';
import BottomMenu from '@components/common/BottomMenu';
import Main from '@components/common/MainContent';
import { MainButton } from '@components/Button';
import StatusBar from '@components/common/StatusBar';
import { MemberListItem } from '@components/MemberListItem';
import Form from '@components/Form';
import useChatMessages from '@hooks/useChatMessages';

export default function Chat() {
  const userName = useSelector((state: RootState) => state.user.name);
  const { chatData, addMessage, getLastMessagePreview } = useChatMessages();

  // TODO : hook 분리하기
  const searchMember = (text: string) => {
    alert(text);
  };

  // TODO : 사용자 id를 가져와
  // TODO : 사용자 id와 일치하는 message_{id}.json을 가져와
  // TODO : 각 json파일을 배열에 담고
  // TODO : map함수를 활용해서 채팅상대이름, 최근채팅미리보기, 채팅상대 프로필이미지 가 담긴 아이템을 나열해서 리스트로 완성
  // TODO : ~를 통합한 custom hook 구현

  useEffect(() => {
    console.log('chat');
    console.log(chatData);
  });

  // TODO : 아이디에 맞는 사용자 이름 가져와

  const userNames: { [key: string]: string } = {};
  userList.forEach((user) => {
    userNames[user.id] = user.userName;
  });
  // TODO : 채팅 리스트 컴퍼넌트 구현

  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <Header title="채팅" />
      <Main>
        <div className="flex gap-4 justify-between h-23 mx-5 my-3 bg-border-l-rose-700 ">
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
        {Object.keys(chatData).map((userId) => {
          const lastMessageInfo = getLastMessagePreview(userId);
          return (
            <MemberListItem
              key={userId}
              _id={userId}
              name={userNames[userId] || '(알 수 없음)'}
              lastMessage={lastMessageInfo.message}
              lastTimeStamp={lastMessageInfo.timeStamp}
            />
          );
        })}
      </Main>

      <BottomMenu />
    </div>
  );
}
