import styled from "styled-components";

export const CardStyled = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    max-width: 500px;
    height: 80px;
    background-color: var(--white-50);
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s;

    :hover{
        box-shadow: 3px 4px 8px -3px rgba(0, 0, 0, 1);
    }

    div {
        img {
            height: 70px;
            width: 70px;
            background-color: black;
            border-radius: 50%;
            color: white;
        }
    }
    section {
        h3, span {
            font-size: 15px;
        }
        h3 {
            color: var(--grey-50);
        }
        span {
            color: #616161;
        }
    }
`