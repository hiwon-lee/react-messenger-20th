import { useState } from 'react';
import Profile from '../../components/Profile';
import ChatHeader from './ChatHeader';
import Button from '../../components/Button';

export default function ToDoList() {
  const [value, setValue] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <div className="bg-primary">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          placeholder="입력하세요"
        ></input>
        <button>제출</button>
      </form>
    </div>
  );
}
