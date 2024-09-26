import React from 'react';
import { ChatInterface } from '../pages/Chat/ChatInterface';

type ChattingProps = {
  name: string; // 나
  sender: string; // 상대방
  time: string; // 메시지 친 시간
  content: string; // 메시지 내용
  timeStamp: string; // 언제썼는지
  isOwnMessage: boolean; // 이 메시지가 내건지
};

const MessageItem = ({ isOwnMessage, content }: ChatInterface) => {
  return (
    <div
      className={`font-body p-2.5 rounded-xl w-fit ${
        isOwnMessage
          ? 'bg-primary text-white ms-auto'
          : 'bg-gray-50 text-gray-900 me-auto'
      }`}
    >
      {content}
    </div>
  );
};

export default MessageItem;
