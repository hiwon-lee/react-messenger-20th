import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Form from '../../components/Form';
import Button from '../../components/Button';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import addCircle from '../../assets/addCircle.svg';
import emoji from '../../assets/emoji.svg';
export default function ChatForm() {
  const userName = useSelector((state: RootState) => state.user.name);
  const addMessage = (text: string) => {
    // TODO : 메시지 저장 로직 추가
    const newMessage = {
      id: new Date().toString(),
      text: text,
      sender: userName,
      timeStamp: new Date().toLocaleDateString,
    };
  };
  return (
    <div className="flex gap-4 justify-between h-24 p-5 bg-border-l-rose-700 ">
      <Button
        type="button"
        src={addCircle}
      />
      <Form
        name={userName}
        onSubmit={addMessage}
        src={emoji}
      />
    </div>
  );
}
