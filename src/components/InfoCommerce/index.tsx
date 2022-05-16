import { Section, DivPhoto, SectionInfos, Sessions } from "./style";
import {
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsPhone,
  BsTelephone,
  BsFillStarFill,
  BsImageFill,
  BsFillGeoAltFill,
} from "react-icons/bs";
import { useState } from "react";
import Address from "../Address";
import Galery from "../Galery";
import FeedBack from "../Feedback";
import ButtonIcon from "../ButtonIcon";
import ModalFeedBack from "../ModalFeedback";

const InfoCommerce = ({ commerce }: any) => {
  const [showAddress, setShowAddress] = useState<boolean>(true);
  const [showGalery, setShowGalery] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false)

  const changeSession = (
    address: boolean,
    galery: boolean,
    feedback: boolean
  ) => {
    setShowAddress(address);
    setShowGalery(galery);
    setShowFeedback(feedback);
  };

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
          <ButtonIcon type="button" icon={BsFillStarFill} onClick={() => setOpen(true)}>
            Avaliar comercio
          </ButtonIcon>
        </section>
      </DivPhoto>
      <SectionInfos>
        <Sessions>
          <button onClick={() => changeSession(true, false, false)}>
            <BsFillGeoAltFill /> Endereco
          </button>
          <button onClick={() => changeSession(false, true, false)}>
            <BsImageFill /> Galeria
          </button>
          <button onClick={() => changeSession(false, false, true)}>
            <BsFillStarFill /> Avaliações
          </button>
        </Sessions>

        {showAddress && <Address commerce={commerce} />}
        {showGalery && <Galery commerce={commerce} />}
        {showFeedback && <FeedBack commerce={commerce} />}
        {open && <ModalFeedBack open={open} setOpen={setOpen}/>}
      </SectionInfos>
    </Section>
  );
};

export default InfoCommerce;
