import { Input } from "../../components/Input";
import ButtonDefault from "../../components/Button";
import { DivButtons, SectionForm, Form } from "./style";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ImgSignup from "../../assets/background2.svg";
import Arrow from "../../components/ArrowLeft";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/User";

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  birthDate: string;
}

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const history = useHistory<unknown>()
  const {createUser} = useUser()

  const SignUpSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("Campo obrigatorio"),
    lastName: yup.string().required("Campo obrigatorio"),
    email: yup.string().email("Email invalido").required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
    phone: yup.string().required("Campo obrigatorio"),
    birthDate: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (data: SignUpData) => {
    createUser(data);
  };

  return (
    <>
      <Arrow onClick={() => history.push('/login')}/>
      <SectionForm>
        <img src={ImgSignup} alt="Background SignUp" />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Nova conta</h1>
          <label>Insira seus dados para criar uma conta</label>
          <Input
            placeholder="Nome"
            setShowPassword={setShowPassword}
            {...register("firstName")}
            error={errors.firstName}
          />
          <Input
            placeholder="Sobrenome"
            setShowPassword={setShowPassword}
            {...register("lastName")}
            error={errors.lastName}
          />
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
            placeholder="Telefone"
            setShowPassword={setShowPassword}
            {...register("phone")}
            error={errors.phone}
          />
          <Input
            placeholder="Data de nascimento"
            setShowPassword={setShowPassword}
            {...register("birthDate")}
            error={errors.birthDate}
          />
          <span>
            Clique aqui para ler os <a href="#">Termos de uso</a>
          </span>
          <DivButtons>
            <input type="checkbox" />{" "}
            <label>Concordo com os termos de uso.</label>
          </DivButtons>
          <ButtonDefault type="submit" width="100%">
            Cadastrar
          </ButtonDefault>
        </Form>
      </SectionForm>
    </>
  );
};

export default SignUp;
