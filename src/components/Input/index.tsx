import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  SetStateAction,
} from "react";
import { FieldError, FieldValues } from "react-hook-form";
import { IconType } from "react-icons";
import { Container, InputContainer } from "./style";
import ButtonIcon from "../ButtonIcon";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | FieldValues | null;
  icon?: IconType | Boolean;
  showPassword?: Boolean;
  setShowPassword: React.Dispatch<SetStateAction<boolean>>;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  error,
  icon,
  setShowPassword,
  showPassword,
  ...rest
}, ref) => {
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      {!!error && <span>Deu ruim</span>}
      <InputContainer>
        <input {...rest} ref={ref}/>
        {icon && (
          <ButtonIcon
            icon={showPassword ? AiOutlineEyeInvisible : AiOutlineEye}
            onClick={() => togglePassword()}
            type='button'
          />
        )}
      </InputContainer>
    </Container>
  );
};

export const Input = forwardRef(InputDefault);
