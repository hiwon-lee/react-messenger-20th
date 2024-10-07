import { useEffect, useRef, useState } from 'react';
import type { RootState } from '@redux/store';
import { useSelector, useDispatch } from 'react-redux';
import MessageItem from '@components/MessageItem';
import { ChatMainInterface } from './ChatInterface';
import { setEmoji } from '@redux/messageSlice';
import Button from '@components/Button';

// 이모지 아이콘 (5개)
import angryEmotion from '@assets/emotion/angry.png';
import awesomeEmotion from '@assets/emotion/awsome.png';
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

// ChatMain : 메시지 데이터 렌더링 -> 화면에 보여줌
export default function ChatMain({ messages }: ChatMainInterface) {
  const userName = useSelector((state: RootState) => state.user.name);
  const messageEmoji = useSelector((state: RootState) => state.message);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [selectedMessageId, setSelectedMessageId] = useState<string>();
  const dispatch = useDispatch();

  // 메시지 추가되면 자동으로 scroll 올라감
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // 더블 클릭 -> 해당 메시지 ID 가져옴
  const handleDoubleClick = (id: string) => {
    console.log('hi');
    setSelectedMessageId(id);
  };

  // handleEmojiSelect : 메시지에 해당하는 이모지 선택
  const handleEmojiSelect = (emoji: string) => {
    console.log(emoji);
    if (selectedMessageId) {
      dispatch(setEmoji({ id: selectedMessageId, emoji }));
      setSelectedMessageId('');
    }
  };

  // prev날짜 비교.. temp 같은거
  let lastDate = '';

  // TODO : isOwnMessage로직 수정 (안해도 될수도? 일단은 잘되는 중)

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
            <div onDoubleClick={() => handleDoubleClick(message.id)}>
              <MessageItem
                id={message.id}
                content={message.content}
                isOwnMessage={message.userName === userName}
                userName={message.userName}
                receiver={message.receiver}
                timeStamp={message.timeStamp}
                date={message.date}
                // emoji={message.emoji}
              />
            </div>
            {message.emoji && (
              <Button
                src={message.emoji}
                type="button"
              />
            )}
            {selectedMessageId === message.id && (
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
