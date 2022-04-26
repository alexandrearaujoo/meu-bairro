import { Section } from "./style";
import { useParams } from "react-router-dom";
import { useCommerce } from "../../providers/Commerce";
import { useEffect } from "react";
import InfoCommerce from "../../components/InfoCommerce";
import Header from "../../components/Header";

interface CommerceId {
  id: string;
}

const BusinessPage = () => {
  const { id } = useParams<CommerceId>();

  const { getOneCommerce, infoCommerce } = useCommerce();

  useEffect(() => {
    getOneCommerce(id);
  }, []);

  return (
    <>
      <Header />
      <Section>
        {infoCommerce.map((commerce) => (
          <InfoCommerce key={commerce.id} commerce={commerce}/>
        ))}
      </Section>
    </>
  );
};

export default BusinessPage;
