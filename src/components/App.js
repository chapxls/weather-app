import React, { Component } from "react";
import styled from "styled-components";
import "./App.scss";
import Card from "./Card/Card";
import List from "./List/List";

class App extends Component {
  render() {
    return (
      <Container>
        <SideBar className="sidebar">
          <Card />
        </SideBar>
        <Main className="main">
          <List />
        </Main>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    display: inherit;
    height: initial;
  }
`;

const SideBar = styled.div`
  width: 30%;
  height: 100%;
  background: #f1f8ff;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 16px;
  }
`;

const Main = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 32px;
  }
`;

export default App;
