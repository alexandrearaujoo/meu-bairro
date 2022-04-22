import {Input} from "../../components/Input";
import ButtonDefault from "../../components/Button";
import { DivButtons, SectionForm, Form, ArrowLeft } from "./style";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Teste from '../../assets/pozecareca.jpg'

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const loginSchema = yup.object().shape({
    email: yup.string().email("Email invalido").required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log(data)
  };

  return (
    <>
      <ArrowLeft>
        <BsArrowLeft />
      </ArrowLeft>
      <SectionForm>
      <img src={Teste} alt='teste'/>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
          <Input
            placeholder="Email"
            setShowPassword={setShowPassword}
            {...register('email')}
            error={errors.email}
          />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            error={errors.password}
            {...register('password')}
            icon
          />
          <DivButtons>
            <ButtonDefault
              background="transparent"
              borderColor="var(--color-secondary)"
              color="var(--color-secondary)"
              type="button"
              onClick={() => console.log("criar conta")}
            >
              Criar Conta
            </ButtonDefault>
            <ButtonDefault type="submit">Entrar</ButtonDefault>
          </DivButtons>
        </Form>
      </SectionForm>
    </>
  );
};

export default Login;
