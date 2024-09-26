import React from 'react';

type GreetingsProps = {
  name: string;
  time: string;
  content: string;
};

const Greetings = ({ name, time, content }: GreetingsProps) => (
  <div>Hello, {name}</div>
);

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
