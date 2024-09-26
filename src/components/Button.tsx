interface ButtonProps {
  children?: string;
  src?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
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

export default Button;
