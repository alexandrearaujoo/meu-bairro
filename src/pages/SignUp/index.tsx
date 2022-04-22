import { Input } from "../../components/Input";
import ButtonDefault from "../../components/Button";
import { DivButtons, SectionForm, Form } from "./style";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Teste from '../../assets/pozecareca3.jpg'
import Arrow from "../../components/ArrowLeft";

interface SignUpData {
  email: string;
  password: string;
  username: string;
  cellphone: string;
  dataNascimento: string;
}

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const SignUpSchema = yup.object().shape({
    email: yup.string().email("Email invalido").required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
    username: yup.string().required("Campo obrigatorio"),
    cellphone: yup.string().required("Campo obrigatorio"),
    dataNascimento: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (data: SignUpData) => {
    console.log(data);
  };

  return (
    <>
      <Arrow />
      <SectionForm>
        <img src={Teste} alt='teste'/>

        <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Nova conta</h1>
        <label>Insira seus dados para criar uma conta</label>
          <Input
            placeholder="Email"
            setShowPassword={setShowPassword}
            {...register("email")}
            error={errors.email}
          />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            error={errors.password}
            {...register("password")}
            icon
          />
          <Input
            placeholder="Username"
            setShowPassword={setShowPassword}
            {...register("username")}
            error={errors.username}
          />
          <Input
            placeholder="Telefone"
            setShowPassword={setShowPassword}
            {...register("cellphone")}
            error={errors.cellphone}
          />
          <Input
            placeholder="Data de nascimento"
            setShowPassword={setShowPassword}
            {...register("dataNascimento")}
            error={errors.dataNascimento}
          />
          <Input
            placeholder="Data de nascimento"
            setShowPassword={setShowPassword}
            {...register("dataNascimento")}
            error={errors.dataNascimento}
          />
          <span>
            Clique aqui para ler os <a href="#">Termos de uso</a>
          </span>
          <DivButtons>
            <input type="checkbox" />{" "}
            <label>Concordo com os termos de uso.</label>
          </DivButtons>
          <ButtonDefault type="submit" width="100%">Cadastrar</ButtonDefault>
        </Form>
      </SectionForm>
    </>
  );
};

export default SignUp;
