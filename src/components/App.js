import React, { Component } from 'react'
import styled from 'styled-components'
import Main from './Main'
import Sidebar from './Sidebar'


class App extends Component {

  state = {
    weather: []
  }

  // Function that fetches data from API
  componentDidMount() {
    fetch('http://wttr.in/Stockholm?format=j1')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //this.setState({ weather: data })
    })
    .catch(err => {
      console.log("Error reading data " + err);
    });
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
