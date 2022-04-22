import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    align-items: flex-start;

    span {
        font-size: 12px;
        color: #f12f12;
    }
`
export const InputContainer = styled.div`
    background-color: var(--white);
    padding: 9px;
    width: 100%;  
    max-width: 350px;
    border-radius: 5px;  
    border: 1px solid var(--grey-50);
    display: flex;
    margin: 0 auto;
    transition: 0.5s;

    input {
        background-color: transparent;
        width: 100%;
        border: none;
        color: var(--grey-50);

        ::placeholder {
            color: var(--grey-50);
        }
    }
`