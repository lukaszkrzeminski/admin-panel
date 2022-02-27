import styled, { css } from "styled-components";

export const PopupBackground = styled.div`
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`;

export const Popup = styled.div`
    position: relative;
    width: 70%;
    height: auto;
    background: white;
    padding: 20px;
    margin: 0 auto;
    margin-top: 20%;
    border: 1px solid grey;
    border-radius: 10px;
`;

export const Title = styled.h2`
    font-size: 24px;
    border-bottom: 1px solid grey;
`;

export const PopupText = styled.span`
    font-weight: bold;
    font-size: 20px;
    margin: 0 0 20px 0;
    padding: 20px;
    display: inline-block;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid grey;
`;

export const PopupButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 20%;
`;

export const PopupButton = styled.button`
    padding: 10px;
    margin: 0 20px;
    width: 15%;
    border: none;
    border-radius: 10px;
    color: white;

    &:hover{
        filter: brightness(110%);
    }
    &:active{
        filter: brightness(120%);
    }

    ${({actionCancel}) => actionCancel && css`
        background-color: dimgray;
    `}
    ${({actionDelete}) => actionDelete && css`
        background-color: crimson;
    `}
`;