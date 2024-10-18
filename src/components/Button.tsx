import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonProps } from '@interface/ButtonInterface';

const Button = ({ children, src, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
    >
      {src ? (
        <img
          src={src}
          alt={src}
        />
      ) : (
        children
      )}
    </button>
  );
};

export const MainButton = (props: ButtonProps) => {
  return (
    <div
      className="rounded-full w-10 h-10
    bg-pink-light text-pink-dark flex items-center justify-center 
   "
    >
      <Button
        type={props.type}
        src={props.src}
        children={props.children}
      />
    </div>
  );
};
export const NamedButton = (props: ButtonProps) => {
  return (
    <Link to={props.link || '/'}>
      <StyledNamedButton>
        <Button
          type={props.type}
          src={props.src}
        />
        <div className="text-small">{props.buttonName}</div>
      </StyledNamedButton>
    </Link>
  );
};
const StyledMainButton = styled.div`
  background-color: var(--pink-light);
  width: 3rem;
  height: 3rem;
  border-radius: 20px;
  color: var(--pink-dark);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNamedButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;
  justify-content: center;
  button {
    width: 3rem;
    height: 3rem;
    text-align: center;
    img {
      margin: auto;
      object-size: contain;
    }
  }
`;

export default Button;
