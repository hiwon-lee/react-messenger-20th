import { useEffect } from 'react';
import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import MessageItem from '../../components/MessageItem';
import { ChatMainInterface } from './ChatInterface';

export default function ChatMain({ messages }: ChatMainInterface) {
  const userName = useSelector((state: RootState) => state.user.name);

  return (
    <div className="flex-1 m-5 flex flex-col gap-1">
      {messages.map((message) => (
        <div>
          <MessageItem
            content={message.content}
            isOwnMessage={message.name === userName}
            name={message.name}
            sender={message.sender}
            time={message.time}
            timeStamp={message.timeStamp}
          />
        </div>
      ))}
    </div>
  );
}
