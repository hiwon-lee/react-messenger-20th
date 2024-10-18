export interface ButtonProps {
  children?: string;
  src?: string;
  buttonName?: string;
  link?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: (text: any) => void;
}
