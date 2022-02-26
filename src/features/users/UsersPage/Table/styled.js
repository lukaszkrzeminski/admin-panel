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