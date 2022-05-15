import { SectionGalery, Title } from "./style";
import Slider from "react-slick";

const Galery = ({ commerce }: any) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initalSlide: 0,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <>
      <Title>Galeria</Title>
      <Slider {...settings}>
        <SectionGalery>
          <img src={commerce.image?.image1} alt="" />
        </SectionGalery>
        <SectionGalery>
          <img src={commerce.image?.image2} alt="" />
        </SectionGalery>
        <SectionGalery>
          <img src={commerce.image?.image3} alt="" />
        </SectionGalery>
        <SectionGalery>
          <img src={commerce.image?.image4} alt="" />
        </SectionGalery>
      </Slider>
    </>
  );
};

export default Galery;
