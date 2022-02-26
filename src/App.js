import React from 'react';
import Header from "./common/Header";
import Main from './common/Main';
import Section from './common/Section';

function App() {
  return (
    <Main>
      <Header title="Dashboard" />
      <Section 
        contentHeader="User List"
        contentBody="content body"
      />
    </Main>
  );
}

export default App;
