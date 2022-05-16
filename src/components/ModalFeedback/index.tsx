import { SetStateAction } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ButtonDefault from "../Button";
import { Section, Container } from "./style";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const ModalFeedBack = ({ open, setOpen }: ModalProps) => {
  return (
    <Container>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <Section>
          <h2>Avaliar Comercio</h2>
          <select>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
          <textarea></textarea>
          <ButtonDefault>Avaliar</ButtonDefault>
        </Section>
      </Modal>
    </Container>
  );
};

export default ModalFeedBack;
