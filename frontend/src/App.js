import React, { Component } from 'react'
import NavBar from './components/NavBar'
import LayoutGrid from './components/grid/LayoutGrid';



class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <LayoutGrid />
      </div>
    )
  }
}

export default App