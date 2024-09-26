export interface ChatInterface {
  name: string; // 나
  sender: string; // 상대방
  time: string; // 메시지 친 시간
  content: string; // 메시지 내용
  timeStamp: string; // 언제썼는지
  isOwnMessage: boolean; // 이 메시지가 내건지
}

// ChatMainInterface : ChatInterface로 이뤄진 배열
export interface ChatMainInterface {
  messages: ChatInterface[];
}

// ChatFormProps : localStorage내부 배열에 채팅메시지 추가
export interface ChatFormInterface {
  addMessage: (text: string) => void;
}
