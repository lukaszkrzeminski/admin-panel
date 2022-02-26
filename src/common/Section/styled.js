import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 0px 3px 5px 2px #A9ADBA;
    padding: 20px 0 10px;
    margin: 0 auto;
`;

export const Paragraph = styled.p`
    display: flex;
    flex-direction: column;
`;

export const ParagraphHeader = styled.span`
    font-weight: bold;
    font-size: 20px;
    border-bottom: 2px solid grey;
    padding: 0px 10px 30px;
    margin: 0;
`;

export const ParagraphBody = styled.span`
    padding: 10px;
    margin: 0;
`;