export interface ButtonProps {
  children?: any;
  src?: string;
  buttonName?: string;
  link?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: (text: any) => void;
}
