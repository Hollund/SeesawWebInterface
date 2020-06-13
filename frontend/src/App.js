import './App.css'
import React, { Component } from 'react'
import CenteredGrid from './components/grid/gridfile'
import { Navbar } from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar name="Seesaw Application" githubrepo="https://github.com/Hollund/SeesawWebInterface"></Navbar>
        <CenteredGrid></CenteredGrid>

      </div>
    )
  }
}

export default App