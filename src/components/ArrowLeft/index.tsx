import { BsArrowLeft } from "react-icons/bs";
import { ArrowLeft } from "./style";

const Arrow = ({...rest}) => {
  return (
    <ArrowLeft {...rest}>
      <BsArrowLeft />
    </ArrowLeft>
  );
}

export default Arrow