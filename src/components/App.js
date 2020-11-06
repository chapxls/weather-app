import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card/Card'
import List from './List/List'


class App extends Component {

  render () {
    return (
      <Container>
        <SideBar2>
          <Card/>
        </SideBar2>
        <Main2>
          <List/>
        </Main2>
      </Container>
    );
  }
}

const Container = styled.div `
  display: flex; 
  margin: 10px;
`

const SideBar2 = styled.div `
  width: 30%;
  height: 100%;
  background: #f1f8ff;
`

const Main2 = styled.div `
height: 100%;
  width: 544px;
`

export default App
