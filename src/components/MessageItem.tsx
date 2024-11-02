import React from 'react';
import { MessageInterface } from '@interface/ChatInterface';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

const MessageItem = (message: MessageInterface) => {
  const { message: messageText, emoji, sender } = message; // 구조 분해 할당으로 사용
  const mainUser = useSelector((state: RootState) => state.user.mainUser);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  // 배경색을 동적으로 결정
  const getMessageBackgroundColor = () => {
    if (message.sender === 'me') {
      return currentUser.id === mainUser.id
        ? 'bg-gray-50 text-gray-900 me-auto'
        : 'bg-primary text-white ms-auto';
    } else {
      return currentUser.id === mainUser.id
        ? 'bg-primary text-white ms-auto'
        : 'bg-gray-50 text-gray-900 me-auto';
    }
    return 'bg-gray-200'; // 기본 배경색
  };
  return (
    <div
      className={`max-w-72 text-body p-2 rounded-xl w-fit ${getMessageBackgroundColor()} 
      }`}
    >
      {messageText}
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
