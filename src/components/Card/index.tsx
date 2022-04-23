import { useHistory } from "react-router-dom"
import { CardStyled } from "./style"


const Card = ({commerce}: any) => {
    const history = useHistory<unknown>()
    return (
        <CardStyled onClick={() => history.push(`/businesspage/${commerce.id}`)}>
            <div>
                <img src={commerce.image.avatar} alt={commerce.name} />
            </div>
            <section>
                <h3>{commerce.name}</h3>
                <span>{commerce.address.street}</span>
            </section>
        </CardStyled>
    )
}

export default Card