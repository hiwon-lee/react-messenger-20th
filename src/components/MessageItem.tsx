import React from 'react';
import { MessageInterface, SenderType } from 'interface/ChatInterface';

const MessageItem = (isOwnMessage: SenderType, message: MessageInterface) => {
  return (
    <div
      className={`max-w-72 text-body p-2 rounded-xl w-fit ${
        isOwnMessage == 'you'
          ? 'bg-primary text-white ms-auto'
          : 'bg-gray-50 text-gray-900 me-auto'
      }`}
    >
      {message.message}
      {message.emoji && (
        <div className="absolute -bottom-3 -right-3">
          <img
            src={message.emoji}
            alt="emoji"
            className="w-5 h-5"
          />
        </div>
      )}
    </div>
  );
};

export default MessageItem;
