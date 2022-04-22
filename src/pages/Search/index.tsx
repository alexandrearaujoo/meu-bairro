import Header from "../../components/Header";
import { InputContainer, Section } from "./style";
import { HiSearch } from "react-icons/hi";

const Search = () => {
  return (
    <>
      <Header />
      <Section>
        <h1>O que procura ?</h1>
        <InputContainer>
          <input type="text" placeholder="Pesquisar" />
          <button>
            <HiSearch />
          </button>
        </InputContainer>
      </Section>
    </>
  );
};

export default Search;
