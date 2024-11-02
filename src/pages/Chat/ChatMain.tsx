import { useEffect, useRef, useState } from 'react';
import type { RootState } from '@redux/store';
import { useSelector, useDispatch } from 'react-redux';
import MessageItem from '@components/MessageItem';
import { ChatInterface, MessageInterface } from '@interface/ChatInterface';
import { setEmoji } from '@redux/messageSlice';
import Button from '@components/Button';

import angryEmotion from '@assets/emotion/angry.png';
import awesomeEmotion from '@assets/emotion/awesome.png';
import heartEmotion from '@assets/emotion/heart.png';
import smileEmotion from '@assets/emotion/smile.png';
import surpriseEmotion from '@assets/emotion/surprise.png';

// 메시지 날짜 변경 시 표기될 날짜 정보
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};

export default function ChatMain(data: ChatInterface) {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [selectedMessageId, setSelectedMessageId] = useState<string>();
  const dispatch = useDispatch();

  const id: string = data.id;
  const messages: MessageInterface[] = data.messages;

  // 자동 스크롤
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleDoubleClick = (id: string) => {
    setSelectedMessageId(id);
  };

  const handleEmojiSelect = (emoji: string) => {
    if (selectedMessageId) {
      dispatch(setEmoji({ id: selectedMessageId, emoji }));
      setSelectedMessageId('');
    }
  };

  let lastDate = '';

  return (
    <div
      ref={chatContainerRef}
      className="flex-1 overflow-auto m-5 my-0 flex flex-col gap-1 scrollbar-thin scrollbar-rounded"
    >
      {messages.map((message, idx) => {
        const messageDate = formatDate(message.date);
        const showDate = lastDate !== messageDate;
        lastDate = messageDate;

        return (
          <div
            key={idx}
            className="relative"
          >
            {showDate && (
              <div className="flex items-center my-2">
                <div className="flex-grow border-t border-gray-500 "></div>
                <div className="text-caption text-gray-500 px-4 whitespace-nowrap">
                  {messageDate}
                </div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            )}
            <div onDoubleClick={() => handleDoubleClick(id)}>
              <MessageItem
                sender={message.sender}
                message={message.message}
                timeStamp={message.timeStamp}
                date={message.date}
                emoji={message.emoji}
              />
            </div>
            {message.emoji && (
              <Button
                src={message.emoji}
                type="button"
              />
            )}
            {selectedMessageId === id && (
              <div className="absolute -top-10 left-1/2 w-80 transform -translate-x-1/2 bg-white border rounded-lg shadow-lg p-2 flex space-x-2">
                <Button
                  src={smileEmotion}
                  type="button"
                  onClick={() => handleEmojiSelect(smileEmotion)}
                />
                <Button
                  src={heartEmotion}
                  type="button"
                  onClick={() => handleEmojiSelect(heartEmotion)}
                />
                <Button
                  src={awesomeEmotion}
                  type="button"
                  onClick={() => handleEmojiSelect(awesomeEmotion)}
                />
                <Button
                  src={surpriseEmotion}
                  type="button"
                  onClick={() => handleEmojiSelect(surpriseEmotion)}
                />
                <Button
                  src={angryEmotion}
                  type="button"
                  onClick={() => handleEmojiSelect(angryEmotion)}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
