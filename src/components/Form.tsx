import React from 'react';
import { useState } from 'react';
import Button from './Button';

type FormProps = {
  name: string;
  src?: string;
  children?: string;
  onSubmit: (message: string) => void;
};

const Form = ({ name, src, children, onSubmit }: FormProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // target : event발생당한 놈
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    }
  };
  return (
    <div className="flex-grow flex items-center gap-5 border-1">
      <form
        className="flex-grow"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-gray-100 rounded-xl border-gray-100"
          onChange={handleChange}
          value={value}
          placeholder="메시지를 입력하세요"
        ></input>
      </form>
      <Button
        type="button"
        src={src}
      ></Button>
    </div>
  );
};

Form.defaultProps = {
  name: '알 수 없음',
};

export default Form;
