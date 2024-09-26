interface ButtonProps {
  children: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick: () => void;
}

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
