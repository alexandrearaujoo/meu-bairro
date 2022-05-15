import Rating from "@mui/material/Rating";
import { useUser } from "../../providers/User";
import { SectionFeedback } from "./style";

const FeedBack = ({ commerce }: any) => {

    const { userId } = useUser();

  return (
    <SectionFeedback>
      {commerce.feedback.map((item: any) => (
        <>
          <section>
            <div>
              <img src={item.owner.avatarUrl} alt="" />
              <span>{item.owner.firstName}</span>
            </div>
            <Rating
              name="half-rating-read"
              defaultValue={item.rate}
              precision={0.5}
              readOnly
            />
            <span>{item.comment}</span>
            {item.feedbackOwnerId === userId && (
              <button>Remover avaliação</button>
            )}
          </section>
        </>
      ))}
    </SectionFeedback>
  );
};

export default FeedBack;
