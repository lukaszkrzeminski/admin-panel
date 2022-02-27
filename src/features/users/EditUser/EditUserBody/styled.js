import styled, { css } from "styled-components";

export const EditUserFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    text-align: center;
`;

export const Label = styled.label`
    width: 100%;
    justify-content: end;
    margin: 10px 0;
`;

export const LabelText = styled.span`
    width: 200px;
    display: inline-block;
`;

export const Input = styled.input`
    width: 500px;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 10px;
`;

export const EditUserButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    padding: 20px 10px;

`;

export const EditUserButton = styled.button`
    padding: 10px;
    margin: 10px 20px;
    width: 15%;

    &:hover{
        filter: brightness(110%);
    }
    &:active{
        filter: brightness(120%);
    }

    ${({cancelAction}) => cancelAction && css`
        border: 1px solid crimson;
        border-radius: 10px;
        color: crimson;
        background-color: white;
    `}
    ${({submitAction}) => submitAction && css`
        border: none;
        border-radius: 10px;
        color: white;
        background-color: green;
    `}
`;