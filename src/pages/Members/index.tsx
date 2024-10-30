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

export default function Members() {
  const searchMember = (text: string) => {
    alert(text);
  };
  const members = useLocalStorage<UserInterface[]>({
    key: 'members',
    initialValue: memberList,
  })[0];
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
      {members.toString()}
      {/* {members.map((member, idx) => {
        <MemberListItem
          _id="temp"
          name={member}
          lastMessage="꺼져"
          lastTimeStamp="오후 10:34"
        />;
      })} */}

      <BottomMenu />
    </div>
  );
}
