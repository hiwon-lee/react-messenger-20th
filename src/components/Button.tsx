import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonProps } from '@interface/ButtonInterface';

const Button = ({ children, src, type, onClick }: ButtonProps) => {
  console.log(children);
  return (
    <button
      className="w-full h-full text-center"
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
      className="rounded-full w-12 h-12
    bg-pink-light text-largeHeading text-pink-dark flex items-center justify-center 
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
export const OnlineTaggedButton = (props: ButtonProps) => {
  return (
    <StyledOnlineTaggedButton>
      {/* <div className="absolute"> */}
      <MainButton
        type={props.type}
        src={props.src}
        children={props.children}
      />
      {/* </div> */}
      <StyledOnlineTag></StyledOnlineTag>
    </StyledOnlineTaggedButton>
  );
};
const StyledOnlineTaggedButton = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  margin: 1rem 0;
`;
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

const StyledOnlineTag = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid white;
  background-color: green;
  width: 12px;
  height: 12px;
  border-radius: 100px;
`;

const StyledNamedButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;
  justify-content: center;
  button {
    width: 2rem;
    height: 2rem;
    text-align: center;
    img {
      margin: auto;
      object-size: contain;
    }
  }
`;

export default Button;
