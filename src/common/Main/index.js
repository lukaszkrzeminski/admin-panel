import React from 'react';
import { MainContainer } from "./styled";

const Main = (props) => (
    <MainContainer>
        {props.children}
    </MainContainer>
)

export default Main;