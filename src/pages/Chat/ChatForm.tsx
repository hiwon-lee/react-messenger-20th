import { RootState } from '@redux/store';
import { useSelector, useDispatch } from 'react-redux';
import Form from '@components/Form';
import Button from '@components/Button';

import addCircle from '@assets/addCircle.svg';
import emoji from '@assets/emoji.svg';

import { ChatFormInterface } from 'interface/ChatInterface';

export default function ChatForm({ addMessage }: ChatFormInterface) {
  const userName = useSelector((state: RootState) => state.user.name);

  return (
    <div className="flex gap-4 justify-between h-23 p-5 bg-border-l-rose-700 ">
      <Button
        type="button"
        src={addCircle}
      />
      <Form
        name={userName}
        onSubmit={(text: string) => addMessage(text)}
        src={emoji}
        placeHolder="메시지를 입력하세요"
      />
    </div>
  );
}
