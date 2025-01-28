import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  bgColor?: string;
}

const InputContainer = ({ children, bgColor = '#ffffff' }: Props) => {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: bgColor, borderRadius: 4 }}
    >
      {children}
    </div>
  );
};

export default InputContainer;
