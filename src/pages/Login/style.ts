import styled from "styled-components";

export const ArrowLeft = styled.button`
    position: fixed;
    left: 10px;
    top: 10px;
    border: none;
    cursor: pointer;
    background-color: transparent;

    svg {
        color: var(--color-primary);
        width: 30px;
        height: 30px;
    }
`


export const SectionForm = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;

    h1 {
        font-size: 32px;
        font-family: 'Comfortaa';
        font-weight: bold;
        margin-bottom: 15px;
        color: var(--color-primary)
    }

    img {
        width: 500px;
        @media screen and (min-width: 320px ) {
            display: none;
        }
        @media screen and (min-width: 1024px){
            display: block;
        }
    }
`
export const Form = styled.form`
    width: 95%;
    max-width: 500px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const DivButtons = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    justify-content: space-between;
`