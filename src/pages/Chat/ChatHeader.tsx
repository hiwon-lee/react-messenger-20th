import type { RootState } from '@redux/store';
import { useSelector } from 'react-redux';

import prevButton from '@assets/prevButton.png';
import Profile from '@components/Profile';

// ChatHeader : 현재 누구와 대화하고 있는 지 확인할 수 있음
export default function ChatHeader() {
  const userName = useSelector((state: RootState) => state.user.name);
  const recentTime = '마지막접속 오후 5:06';

  return (
    <div className="flex items-center my-2.5 mx-5 bg-border-l-indigo-500">
      <img
        className="w-2 h-4 me-5"
        alt="prev"
        src={prevButton}
      />
      <Profile />
      <div className="mx-2.5 flex flex-col ">
        <p>{userName}</p>
        <p className="text-gray-500 text-caption">{recentTime}</p>
      </div>
    </div>
  );
}
