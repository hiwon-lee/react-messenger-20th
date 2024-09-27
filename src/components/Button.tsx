interface ButtonProps {
  children?: string;
  src?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: (text: any) => void;
}

const Button = ({ children, src, type, onClick }: ButtonProps) => {
  console.log(children);
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

export default Button;
