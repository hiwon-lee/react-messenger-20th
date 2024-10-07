import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import defaultMessages from '../../data/messages.json';

export default function Team() {
  const userName = useSelector((state: RootState) => state.user.name);

  const [messages, setMessages] = useLocalStorage({
    key: 'messages',
    initialValue: defaultMessages,
  });

  // addMessage : 메시지 저장 로직 추가 -> localStorage에 차곡히 쌓음
  const addMessage = (text: string) => {
    const now = new Date();
  };
  return <div className="h-full flex flex-col">members</div>;
}
