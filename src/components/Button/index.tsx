import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./style";

interface ButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  background?: string;
  borderColor?: string;
  color?: string;
  width?: string
}

const ButtonDefault = ({
  children,
  background = 'var(--color-secondary)',
  borderColor = 'transparent',
  color = 'var(--white)',
  width = '140px',
  ...rest
}: ButtonDefaultProps) => {
  return (
    <Button
      background={background}
      borderColor={borderColor}
      color={color}
      width={width}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonDefault;
