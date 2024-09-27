export interface ReceiverState {
  _id: string;
  name: string;
  profileImg: string | undefined;
}

export interface ChatInterface {
  id: string; // 고유ID
  userName: string; // 나
  receiver: string; // 상대방
  content: string; // 메시지 내용
  timeStamp: string; // 언제썼는지 (HH:MM)
  date: string; // 메시지를 보낸 날짜 (YYYY-MM-DD)
  isOwnMessage?: boolean; // 이 메시지가 내건지
  emoji?: string | undefined; // 이모지 정보
}

// ChatMainInterface : ChatInterface로 이뤄진 배열
export interface ChatMainInterface {
  messages: ChatInterface[];
}

// ChatFormProps : localStorage내부 배열에 채팅메시지 추가
export interface ChatFormInterface {
  addMessage: (text: string) => void;
}
