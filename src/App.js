import React from 'react';
import Header from "./common/Header";
import Main from './common/Main';
import Section from './common/Section';
import UsersPage from './features/users/UsersPage';
import UsersPageHeader from './features/users/UsersPageHeader';

function App() {
  return (
    <Main>
      <Header title="Dashboard" />
      <Section 
        contentHeader={<UsersPageHeader />}
        contentBody={<UsersPage />}
      />
    </Main>
  );
}

export default App;
