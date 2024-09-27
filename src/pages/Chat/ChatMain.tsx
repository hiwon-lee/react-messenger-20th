import { useEffect, useRef } from 'react';
import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import MessageItem from '../../components/MessageItem';
import { ChatMainInterface } from './ChatInterface';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};
export default function ChatMain({ messages }: ChatMainInterface) {
  const userName = useSelector((state: RootState) => state.user.name);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // 메시지 추가되면 자동으로 scroll올라감
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  let lastDate = '';

  // TODO : isOwnMessage로직 수정

  return (
    <div
      ref={chatContainerRef}
      className="flex-1 overflow-auto m-5 my-0 flex flex-col gap-1 scrollbar-thin scrollbar-rounded"
    >
      {messages.map((message, idx) => {
        const messageDate = formatDate(message.id);
        const showDate = lastDate !== messageDate;
        lastDate = messageDate;

        return (
          <div key={idx}>
            {showDate && (
              <div className="flex items-center my-2">
                <div className="flex-grow border-t border-gray-500 "></div>
                <div className="text-caption text-gray-500 px-4 whitespace-nowrap">
                  {messageDate}
                </div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            )}
            <MessageItem
              id={message.id}
              content={message.content}
              isOwnMessage={message.userName === userName}
              userName={message.userName}
              receiver={message.receiver}
              timeStamp={message.timeStamp}
              date={message.date}
            />
          </div>
        );
      })}
    </div>
  );
}
