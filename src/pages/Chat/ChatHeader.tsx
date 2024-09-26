import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';

import prevButton from '../../assets/prevButton.png';
import Profile from '../../components/Profile';

interface ChatInfoInterface {
  user: string;
  recentTime: string;
}
export default function ChatHeader() {
  const userName = useSelector((state: RootState) => state.user.name);
  const recentTime = '화요일 오후 2시';
  const dispatch = useDispatch();

  // TODO : 여기에다가 이미지 주소 추가하고 아닌 경우 '박'이라고 일단은 두기로

  return (
    <div className="flex items-center gap-5 my-2.5 mx-4 bg-border-l-indigo-500">
      <img
        className="w-2 h-4 "
        alt="prev"
        src={prevButton}
      />
      <Profile />
      <div className="flex flex-col">
        <p>{userName}</p>
        <p>{recentTime}</p>
      </div>
    </div>
  );
}
