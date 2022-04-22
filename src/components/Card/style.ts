import styled from "styled-components";

export const CardStyled = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    width: 90%;
    max-width: 350px;
    height: 75px;

    div {
        div {
            height: 50px;
            width: 50px;
            background-color: black;
            border-radius: 8px;
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