import { SectionGalery, Title } from "./style";

const Galery = ({commerce}: any) => {
  return (
    <SectionGalery>
      <Title>Galeria</Title>
      <div>
        <img src={commerce.image?.image1} alt="" />
        <img src={commerce.image?.image2} alt="" />
        <img src={commerce.image?.image3} alt="" />
        <img src={commerce.image?.image4} alt="" />
      </div>
    </SectionGalery>
  );
};

export default Galery;
