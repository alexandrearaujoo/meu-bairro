import Header from "../../components/Header";
import { InputContainer, Section, Categories, Empty} from "./style";
import { HiSearch } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useCommerce } from "../../providers/Commerce";
import Card from "../../components/Card";
import { useCategory } from "../../providers/Categories";
import { useUser } from "../../providers/User";
import { Button } from "@mui/material";
import Lottie from "react-lottie";
import SearchAnimation from "../../lotties/77218-search-imm.json";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { filterCommerce, filteredCommerce, getAllCommerces } = useCommerce();
  const { token } = useUser();
  const { categories, getCategories } = useCategory();

  useEffect(() => {
    getAllCommerces();
    getCategories(token);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SearchAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Header />
      <Section>
        <h1>O que procura ?</h1>
        <InputContainer>
          <input
            type="text"
            placeholder="Pesquisar"
            onChange={(e) => setInputValue(e.currentTarget.value)}
          />
          <button onClick={() => filterCommerce(inputValue)} type="button">
            <HiSearch />
          </button>
        </InputContainer>
        <Categories>
          {categories.map(({ name }: any) => (
            <Button onClick={() => filterCommerce(name)}>{name}</Button>
          ))}
        </Categories>

        {filteredCommerce.length > 0 ? (
          <>
            {filteredCommerce.map((commerce) => (
              <Card commerce={commerce} />
            ))}
          </>
        ) : (
          <Empty>
            <h1>0 Resultados</h1>
            <Lottie options={defaultOptions} height={250} width={300} />
          </Empty>
        )}
      </Section>
    </>
  );
};

export default Search;
