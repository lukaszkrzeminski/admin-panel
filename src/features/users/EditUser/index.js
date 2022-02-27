import React from "react";
import Header from "../../../common/Header";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import { EditUserBody } from "./EditUserBody";
import { EditUserHeader } from "./EditUserHeader";

export const EditUser = () => (
    <Main>
      <Header title="Dashboard" />
      <Section 
        contentHeader={<EditUserHeader />}
        contentBody={<EditUserBody />}
      />
    </Main>
)