import styled from 'styled-components';

interface ButtonProps {
  children?: string;
  src?: string;
  buttonName?: string;
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
    <StyledNamedButton>
      ㅇㄴ림
      <Button
        type={props.type}
        src={props.src}
      />
      <div className="text-small">{props.buttonName}</div>
    </StyledNamedButton>
  );
};

const StyledNamedButton = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export default Button;
