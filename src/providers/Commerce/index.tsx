import {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from "react";
import api from "../../services/api";

interface CommerceProviderProps {
  children: ReactNode;
}

interface Address {
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
}

interface Contact {
  phone1?: string;
  phone2?: string;
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
}

interface Images {
  avatar?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

interface Commerce {
  id: string
  name: string;
  active: boolean;
  address: Address;
  contact?: Contact;
  image?: Images;
}

interface CommerceContextData {
  commerces: Commerce[];
  infoCommerce: Commerce[]
  getAllCommerces: () => Promise<void>;
  getOneCommerce: (id: string) => Promise<void>;
}

const CommerceContext = createContext<CommerceContextData>(
  {} as CommerceContextData
);

const useCommerce = () => {
  const context = useContext(CommerceContext);

  if (!context) {
    throw new Error("teste");
  }
  return context;
};

const CommerceProvider = ({ children }: CommerceProviderProps) => {
  const [commerces, setCommerce] = useState<Commerce[]>([]);
  const [infoCommerce, setInfoCommerce] = useState<Commerce[]>([]);

  const getAllCommerces = useCallback(async () => {
    const res = await api.get("commerce?page=1");
    const filteredCommerces = res.data.data.filter(({ active }: any) => active);
    setCommerce(filteredCommerces);
  }, []);

  const getOneCommerce = useCallback(async (id: string) => {
    const res = await api.get(`commerce/${id}`);
    setInfoCommerce([res.data]);
  }, []);

  return (
    <CommerceContext.Provider
      value={{ commerces, infoCommerce, getAllCommerces, getOneCommerce }}
    >
      {children}
    </CommerceContext.Provider>
  );
};

export { CommerceProvider, useCommerce };
