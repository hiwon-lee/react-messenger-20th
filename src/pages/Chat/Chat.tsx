import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatForm from './ChatForm';

export default function Chat() {
  return (
    <div className="text-sm">
      <ChatHeader />
      <ChatMain />
      <ChatForm />
    </div>
  );
}
