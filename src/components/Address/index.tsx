import { SectionAddress, Div, Title } from "./style"

const Address = ({commerce}: any) => {
    return (
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
    )
}

export default Address