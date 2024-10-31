import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useLocalStorage } from '@hooks/useLocalStorage';

import memberList from '../../data/users.json';
import Header from '@components/common/Header';
import BottomMenu from '@components/common/BottomMenu';
import MemberListItem from '@components/MemberListItem';
import Form from '@components/Form';
import SEARCH from '@assets/search.png';

import { UserInterface } from '@interface/UserInterface';
import { useEffect } from 'react';

export default function Members() {
  const searchMember = (text: string) => {
    alert(text);
  };
  const memberListData: UserInterface[] = memberList;
  const [members, setMembers] = useLocalStorage<UserInterface[]>({
    key: 'members',
    initialValue: memberListData,
  });

  useEffect(() => {
    console.log(members);
  });
  return (
    <div className="h-full flex flex-col">
      <Header title="목록" />
      <div className="flex gap-4 justify-between h-23 p-5 bg-border-l-rose-700 ">
        <Form
          key="searchForm"
          onSubmit={(text: string) => searchMember(text)}
          placeHolder="검색"
        />
      </div>
      <div>
        {' '}
        {members.map((member) => (
          <MemberListItem
            key={member.id}
            _id={member.id}
            name={member.userName}
            lastMessage="꺼져"
            lastTimeStamp="오후 10:34"
          />
        ))}
      </div>

      <BottomMenu />
    </div>
  );
}
