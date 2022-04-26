import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useCommerce } from "../Commerce";

interface UserProviderProps {
  children: ReactNode;
}

interface TokenUser {
  token: string;
  userId: string;
}

interface UserCreateProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  birthDate: string;
}

interface UserLoginProps {
  email: string;
  password: string;
}

interface UserContextData {
  token: string;
  userId: string
  createUser: (data: UserCreateProps) => Promise<void>;
  loginUser: (data: UserLoginProps) => Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("teste");
  }

  return context;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [token, setToken] = useState<TokenUser>(() => {
    const data = localStorage.getItem('@MeuBairro:token');

    if (data) {
      return JSON.parse(data);
    }

    return {} as TokenUser;
  });

  const history = useHistory<unknown>();

  const createUser = useCallback(async (data: UserCreateProps) => {
    await api
      .post("user", data, {
          headers: {
            'Content-Type': 'application/json'
          }
      })
      .then((res) => {
          console.log(res)
        toast.success("Cadastro realizado")
        history.push('/login')
      })
      .catch((error) => {
        toast.error("Algo deu errado")
      });
  }, []);

  const loginUser = useCallback(async (data: UserLoginProps) => {
    await api
      .post("login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        setToken(data.token);
        localStorage.setItem("@MeuBairro:token", JSON.stringify(data.token));
        toast.success("Login realizado");
        history.push("/dashboard");
      })
      .catch(() => toast.error("Email ou Senha invalidos"));
  }, []);


  return (
    <UserContext.Provider value={{ token: token.token, userId: token.userId, createUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
