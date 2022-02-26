import React from "react";
import Main from "../../common/Main";
import Header from "../../common/Header";
import Section from "../../common/Section";
import UsersPage from "./UsersPage";
import UsersPageHeader from "./UsersPageHeader";

const Users = () => (
    <Main>
      <Header title="Dashboard" />
      <Section 
        contentHeader={<UsersPageHeader />}
        contentBody={<UsersPage />}
      />
    </Main>
)

export default Users;