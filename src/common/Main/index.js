import React from 'react';
import { MainContainer } from "./styled";

export const Main = (props) => (
    <MainContainer>
        {props.children}
    </MainContainer>
)

export default Main;