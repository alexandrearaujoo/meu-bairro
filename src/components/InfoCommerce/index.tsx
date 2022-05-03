import {
  Section,
  SectionAddress,
  DivPhoto,
  SectionInfos,
  SectionGalery,
  SectionFeedback,
  Div,
  Title
} from "./style";
import {
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsPhone,
  BsTelephone,
  BsFillStarFill
} from "react-icons/bs";
import Rating from '@mui/material/Rating'
import { useUser } from "../../providers/User";

const InfoCommerce = ({ commerce }: any) => {

  const {userId} = useUser()
  console.log(commerce.owner)

  return (
    <Section>
      <DivPhoto>
        <figure>
          <img src={commerce.image?.avatar} alt="Imagem do Comercio" />
        </figure>
        <h1>{commerce.name}</h1>
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
            <BsPhone /> {commerce.contact?.phone1}
          </span>
          <span>
            <BsTelephone /> {commerce.contact?.phone2}
          </span>
        </div>
        <section>
          <button type="button"> <BsFillStarFill /> Avaliar comercio</button>
        </section>
      </DivPhoto>
      <SectionInfos>
        <SectionAddress>
          <Title>Endereço</Title>
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
          <Title>Galeria</Title>
          <div>
            <img src={commerce.image?.image1} alt="" />
            <img src={commerce.image?.image2} alt="" />
            <img src={commerce.image?.image3} alt="" />
            <img src={commerce.image?.image4} alt="" />
          </div>
        </SectionGalery>
        <Title>Avaliações</Title>
        <SectionFeedback>
        {commerce.feedback.map((item: any) => (
          <>
          <section>
            <div>
            <img src={item.owner.avatarUrl} alt="" />
            <span>{item.owner.firstName}</span>
            </div>
            <Rating name="half-rating-read" defaultValue={item.rate} precision={0.5} readOnly />
            <span>{item.comment}</span>
            {item.feedbackOwnerId === userId && <button>Remover avaliação</button>}
            </section>
          </>
        ))}
        </SectionFeedback>
      </SectionInfos>
    </Section>
  );
};

export default InfoCommerce;
