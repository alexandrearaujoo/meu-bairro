import Card from "../Card";
import { List } from "./style";

const CardList = () => {
  return (
    <List>
      {[1, 2, 3,4,5,6,7,8,9,10].map((_) => (
        <Card />
      ))}
    </List>
  );
};

export default CardList;
