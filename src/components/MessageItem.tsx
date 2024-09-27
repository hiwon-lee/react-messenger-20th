import React from 'react';
import { ChatInterface } from '../pages/Chat/ChatInterface';

const MessageItem = ({ isOwnMessage, content }: ChatInterface) => {
  return (
    <div
      className={`text-body px-2.5 py-1.5 rounded-xl w-fit ${
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
