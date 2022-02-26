import styled, { css } from "styled-components";

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

export const TableRow = styled.tr`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid grey;
    padding: 20px 10px;

    ${({ headerRow }) => headerRow && css`
        background-color: lightgray;
    `}
`;

export const TableHeaderCell = styled.th`
    font-weight: bold;
    padding: 10px;
    width: 100%;
    text-align: center;
`;

export const TableCell = styled.td`
    padding: 10px;
    width: 100%;
    text-align: center;
`;

export const Button = styled.button`
    padding: 10px 0;
    width: 80%;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover{
        filter: brightness(110%);
    }
    &:active{
        filter: brightness(120%);
    }

    ${({ editUser }) => editUser && css`
        background-color: orange;
    `}
    ${({ deleteUser }) => deleteUser && css`
        background-color: crimson;
    `}

`;