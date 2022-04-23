import Card from "../../components/Card";
import { Section } from "./style";
import Arrow from "../../components/ArrowLeft";
import { useParams } from "react-router-dom";
import { useCommerce } from "../../providers/Commerce";
import { useEffect } from "react";

interface CommerceId {
  id: string;
}

const BusinessPage = () => {
  const { id } = useParams<CommerceId>();

  const { getOneCommerce, infoCommerce } = useCommerce();
  
  useEffect(() => {
    getOneCommerce(id);
  }, []);

  console.log(infoCommerce);
  return (
    <>
      <Arrow />
      <Section>
        {/* <div>
          <img src={infoCommerce.image.avatar} alt={infoCommerce.name} />
        </div>
        <section>
          <h3>{infoCommerce.name}</h3>
          <span>{infoCommerce.address.street}</span>
        </section> */}
        <span>Info 1 </span>
        <span>Info 2 </span>
        <span>Info 3 </span>
        <span>Info 4 </span>
        <span>Info 5 </span>
        <span>Info 6 </span>
      </Section>
    </>
  );
};

export default BusinessPage;
