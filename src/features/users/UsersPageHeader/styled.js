import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
`;

export const Title = styled.h2`
    font-size: 24px;
`;

export const ButtonAdd = styled.button`
    color: white;
    background-color: #2467E5; //Royal Blue
    font-weight: bold;
    border: none;
    border-radius: 10px;
    width: 20%;
    margin: 0;
    padding: 0 10px;

    &:hover{
        filter: brightness(110%);
    }
    &:active{
        filter: brightness(120%);
    }
`;