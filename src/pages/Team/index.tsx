import { useLocalStorage } from '../../hooks/useLocalStorage';
import defaultMessages from '../../data/messages.json';
import StatusBar from '@components/common/StatusBar';
import BottomMenu from '@components/common/BottomMenu';
import Main from '@components/common/MainContent';

export default function Team() {
  const [messages, setMessages] = useLocalStorage({
    key: 'messages',
    initialValue: defaultMessages,
  });

  // addMessage : 메시지 저장 로직 추가 -> localStorage에 차곡히 쌓음
  const addMessage = (text: string) => {
    const now = new Date();
  };
  return (
    <div className="h-full flex flex-col">
      <StatusBar />
      <Main>team</Main>
      <BottomMenu />
    </div>
  );
}
