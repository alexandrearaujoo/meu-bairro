import { useEffect } from "react";
import { useCommerce } from "../../providers/Commerce";
import Card from "../Card";
import { List } from "./style";

const CardList = () => {

  const {getAllCommerces, commerces} = useCommerce()

  useEffect(() =>{
    getAllCommerces()
  },[])
  

  return (
    <List>
      {commerces.map((commerce) => (
        <Card commerce={commerce}/>
      ))}
    </List>
  );
};

export default CardList;
