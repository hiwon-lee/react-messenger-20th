import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useLocalStorage } from '@hooks/useLocalStorage';
import useChatMessages from '@hooks/useChatMessages';

import userList from '../../data/users.json';
import { MemberListItem } from '@components/MemberListItem';
import Header from '@components/common/Header';
import { MainButton } from '@components/Button';
import BottomMenu from '@components/common/BottomMenu';
import Main from '@components/common/MainContent';
import StatusBar from '@components/common/StatusBar';
import Form from '@components/Form';
import { useEffect } from 'react';

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

  // TODO :
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
              name={`${userId}`}
              lastMessage={lastMessageInfo.message}
              lastTimeStamp={lastMessageInfo.timeStamp}
            />
          );
        })}
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
