import Header from "../../components/Header";
import { InputContainer, Section } from "./style";
import { HiSearch } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useCommerce } from "../../providers/Commerce";
import Card from "../../components/Card";


const Search = () => {

  const [inputValue, setInputValue] = useState<string>('')
  const {filterCommerce, filteredCommerce, getAllCommerces} = useCommerce()
  console.log(filteredCommerce)
  useEffect(() => {
    getAllCommerces()
  },[])

  return (
    <>
      <Header />
      <Section>
        <h1>O que procura ?</h1>
        <InputContainer>
          <input type="text" placeholder="Pesquisar" onChange={(e) => setInputValue(e.currentTarget.value)}/>
          <button onClick={() => filterCommerce(inputValue)} type='button'>
            <HiSearch />
          </button>
        </InputContainer>

        {filteredCommerce.length > 0 ? (
          <>
            {filteredCommerce.map((commerce) => 
              <Card commerce={commerce}/>
            )}
          </>
        ) : (
          <h1>Vazio</h1>
        )}
      </Section>
    </>
  );
};

export default Search;
