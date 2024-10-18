import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useLocalStorage } from '@hooks/useLocalStorage';

import defaultMessages from '../../data/messages.json';
import Header from '@components/common/Header';
import BottomMenu from '@components/common/BottomMenu';
import MemberListItem from '@components/MemberListItem';

export default function Members() {
  return (
    <div className="h-full flex flex-col">
      <Header title="목록" />
      <MemberListItem
        _id="temp"
        name="이희원"
        lastMessage="꺼져"
        lastTimeStamp="오후 10:34"
      />
      <BottomMenu />
    </div>
  );
}
