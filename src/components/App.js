import React, { Component } from 'react'
import styled from 'styled-components'
import Main from './Main'
import Sidebar from './Sidebar'


class App extends Component {

  state = {
    weather: []
  }

  componentDidMount() {
    fetch('wttr.in/Stockholm?format=j1')
    .then(res => res.json())
    .then((data) => {
      this.setState({ weather: data })
    })
    .catch(console.log)
  }

  render () {
    return (
      <Container>
      <Sidebar/>
      <Main/>
    </Container>
    );
  }
}

const Container = styled.div `
  display: flex; 
  margin: 10px;
`


export default App
