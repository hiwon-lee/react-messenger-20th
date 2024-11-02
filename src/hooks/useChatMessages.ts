import { useState, useEffect } from 'react';
import userDataList from '@data/users.json';
import { MessageInterface } from '@interface/ChatInterface';
import { UserInterface } from '@interface/UserInterface';

interface ChatData {
  [userId: string]: MessageInterface[];
}

function useChatMessages() {
  const [chatData, setChatData] = useState<ChatData>({});

  // 로컬 스토리지에서 메시지 로드
  useEffect(() => {
    const savedData = localStorage.getItem('chatData');
    console.log(getUserDataById());
    if (savedData) {
      setChatData(JSON.parse(savedData));
    } else {
      initializeChatData();
    }
  }, []);

  // users.json에 있는 사용자들의 ID정보를 배열로 가져오는 함수
  const getUserDataById = () => {
    const userData: UserInterface[] = userDataList;
    const usersIdArr: string[] = userData.map((data) => data.id);
    return usersIdArr;
  };

  // 초기화: 처음 사용할 때 JSON 데이터를 로컬 스토리지에 저장
  const initializeChatData = () => {
    // JSON 데이터 로드 (서버로부터 초기 데이터를 불러오는 형태도 가능)
    const userIdArr: string[] = getUserDataById();
    const allUserMessages: ChatData = {};
    userIdArr.forEach((userID, idx) => {
      import(`@data/messages_${userID}.json`).then((messagesData) => {
        // 새로운 배열을 생성하고 첫 번째 메시지를 추가
        console.log(`userID ${userID}`);
        console.log(messagesData);
        allUserMessages[userID] = messagesData.messages;
      });
    });
    localStorage.setItem('messageData', JSON.stringify(allUserMessages));
    setChatData(allUserMessages);
  };

  // 새로운 메시지 추가 함수
  const addMessage = (userId: string, newMessage: MessageInterface) => {
    const updatedMessages = chatData[userId]
      ? [...chatData[userId], newMessage]
      : [newMessage];
    const updatedChatData = { ...chatData, [userId]: updatedMessages };
    setChatData(updatedChatData);
    localStorage.setItem('chatData', JSON.stringify(updatedChatData));
  };

  // 마지막 메시지 미리보기 함수
  const getLastMessagePreview = (userId: string) => {
    const messages = chatData[userId] || [];
    if (messages.length === 0) return { message: '', timeStamp: '' };
    const lastMessage = messages[messages.length - 1];
    return {
      message: lastMessage.message,
      timeStamp: lastMessage.timeStamp,
    };
  };

  return { chatData, addMessage, getLastMessagePreview };
}

export default useChatMessages;
