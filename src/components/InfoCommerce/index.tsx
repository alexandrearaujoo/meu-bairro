import { Section, SectionAddress, DivPhoto, SectionInfos, SectionGalery, Div } from "./style";
import {
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsPhone,
  BsTelephone,
} from "react-icons/bs";

const InfoCommerce = ({ commerce }: any) => {
  return (
    <Section>
      <DivPhoto>
        <figure>
          <img src={commerce.image?.avatar} alt="Imagem do Comercio" />
        </figure>
        <h1>{commerce.name}</h1>
        <h2>Contato</h2>
        <div>
            <div>
          <a href={commerce.contact?.instagram}>
            <BsInstagram />
          </a>
          <a href={commerce.contact?.facebook}>
            <BsFacebook />
          </a>
          <a href={commerce.contact?.whatsapp}>
            <BsWhatsapp />
          </a>
          </div>
          <span>
            <BsPhone />  {commerce.contact?.phone1}
          </span>
          <span>
            <BsTelephone />  {commerce.contact?.phone2}          
          </span>
        </div>
      </DivPhoto>
      <SectionInfos>
        <SectionAddress>
        <h1>Endereço</h1>
        <div>
          <Div>
          <span>Cidade: {commerce.address.city}</span>
          <span>Bairro: {commerce.address.neighborhood}</span>
          <span>Estado: {commerce.address.state}</span>
          </Div>  
          <Div>
          <span>Rua: {commerce.address.street}</span>
          <span>Numero: {commerce.address.number}</span>
          <span>Complemento: {commerce.address.complement}</span>
          </Div>
          </div>
        </SectionAddress>
        <SectionGalery>
            <h1>Galeria</h1>
            <div>
            <img src={commerce.image?.image1} alt="" />
            <img src={commerce.image?.image2} alt="" />
            <img src={commerce.image?.image3} alt="" />
            <img src={commerce.image?.image4} alt="" />
            </div>
        </SectionGalery>
      </SectionInfos>
    </Section>
  );
};

export default InfoCommerce;
