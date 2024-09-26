import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { ChatInterface } from './ChatInterface';

import prevButton from '../../assets/prevButton.png';
import Profile from '../../components/Profile';

// ChatHeader : 현재 누구와 대화하고 있는 지 확인할 수 있음
export default function ChatHeader() {
  const userName = useSelector((state: RootState) => state.user.name);
  const recentTime = '화요일 오후 2시';

  return (
    <div className="flex items-center gap-5 my-2.5 mx-4 bg-border-l-indigo-500">
      <img
        className="w-2 h-4 "
        alt="prev"
        src={prevButton}
      />
      <Profile />
      <div className="flex flex-col">
        <p>{userName || '박'}</p>
        <p>{recentTime}</p>
      </div>
    </div>
  );
}
