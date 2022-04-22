import image01 from "../../assets/imagem01.jpg";
import image02 from "../../assets/image02.svg";
import image03 from "../../assets/image03.svg";
import image04 from "../../assets/image04.svg";
import { ImgContainer } from "./style";
import Slider from "react-slick";

const Carrousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initalSlide: 0,
    pauseOnHover: true,    
    arrows: false
  };


  return (
    <ImgContainer>
      <Slider {...settings}>
        {/* <img src={image01} alt="Imagem 01" />
        <img src={image02} alt="Imagem 02" />
        <img src={image03} alt="Imagem 03" />
        <img src={image04} alt="Imagem 04" /> */}
        <div>
            slide 1
        </div>
        <div>
            slide 2
        </div>
        <div>
            slide 3
        </div>
        <div>
            slide 4
        </div>
      </Slider>
    </ImgContainer>
  );
};

export default Carrousel;
