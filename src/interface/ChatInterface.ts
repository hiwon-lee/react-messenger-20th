export interface ReceiverState {
  _id: string;
  name: string; // 받는 사람 이름
  profileImg?: string | undefined;
  lastMessage?: string;
  lastTimeStamp?: string;
}

export type SenderType = 'you' | 'me' | string;
export interface MessageInterface {
  sender: SenderType;
  message: string;
  timeStamp: string;
  date: string;
  emoji?: string | undefined; // 이모지 정보
}

export interface ChatInterface {
  id: string; // 고유ID
  sender: string;
  messages: MessageInterface[];
}

// ChatMainInterface : ChatInterface로 이뤄진 배열
export interface ChatMainInterface {
  messages: ChatInterface[];
}

// ChatFormProps : localStorage내부 배열에 채팅메시지 추가
export interface ChatFormInterface {
  addMessage: (text: string) => void;
}
