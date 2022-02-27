import React from "react";
import Header from "../../../common/Header";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import { Form } from "./FormBody";
import { FormHeader } from "./FormHeader";

const FormAdd = () => (

    <Main>
      <Header title="Dashboard" />
      <Section 
        contentHeader={<FormHeader />}
        contentBody={<Form />}
      />
    </Main>
)

export default FormAdd;