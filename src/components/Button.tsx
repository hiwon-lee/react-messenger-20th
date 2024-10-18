import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children?: string;
  src?: string;
  buttonName?: string;
  link?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: (text: any) => void;
}

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
export const NamedButton = (props: ButtonProps) => {
  return (
    <Link to={props.link || '/'}>
      <StyledNamedButton>
        <Button
          type={props.type}
          src={props.src}
        />
        <div className="text-small">{props.buttonName}</div>
        {/* <div> 버튼이다.</div> */}
      </StyledNamedButton>
    </Link>
  );
};

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
