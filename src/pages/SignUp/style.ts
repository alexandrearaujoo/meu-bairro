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

    img {
        @media screen and (min-width: 320px ) {
            display: none;
        }
        @media screen and (min-width: 1024px){
            display: block;
        }
    }
    label {
        color: var(--grey-50);
        font-family: 'Roboto';
        font-size: 13px;
    }
`
export const Form = styled.form`
    width: 95%;
    max-width: 500px;
    height: 455px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    h1 {
        font-size: 32px;
        font-family: 'Comfortaa';
        font-weight: bold;
        margin-bottom: 15px;
        color: var(--color-primary)
    }


    span {
        color: #000;
        font-family: 'Roboto';
        font-size: 13px;
        text-align: start;
        width: 100%;
        max-width: 350px;
        a{
            text-decoration: underline;
            color: var(--color-secondary)
        }
    }
`

export const DivButtons = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    justify-content: start;
    align-items: center;

    label {
        margin-left: 8px;
        font-size: 12px;
    }
`