import React from 'react';
import { ChatInterface } from '@pages/Chat/ChatInterface';

const MessageItem = ({ isOwnMessage, content, emoji }: ChatInterface) => {
  return (
    <div
      className={`max-w-72 text-body p-2 rounded-xl w-fit ${
        isOwnMessage
          ? 'bg-primary text-white ms-auto'
          : 'bg-gray-50 text-gray-900 me-auto'
      }`}
    >
      {content}
      {emoji && (
        <div className="absolute -bottom-3 -right-3">
          <img
            src={emoji}
            alt="emoji"
            className="w-5 h-5"
          />
        </div>
      )}
    </div>
  );
};

export default MessageItem;
