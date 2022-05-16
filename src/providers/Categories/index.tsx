import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import api from "../../services/api";

interface CategoriesProps {
  children: ReactNode;
}

interface Category {
  id: string;
  name: string;
  description: string;
}

interface CategoryContextData {
  categories: Category[];
  getCategories: (token: string) => Promise<void>;
}

const CategoryContext = createContext<CategoryContextData>(
  {} as CategoryContextData
);

const useCategory = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("teste");
  }
  return context;
};

const CategoryProvider = ({ children }: CategoriesProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = useCallback(async (token: string) => {
    const { data } = await api.get("category", {
      headers: {
        Authorization: `Beares ${token}`,
      },
    });
    setCategories(data);
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, getCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, useCategory };
