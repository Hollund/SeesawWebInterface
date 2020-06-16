import React, { useState, Component } from 'react'
import NavBar from './components/grid/NavBar'
import LayoutGrid from './components/grid/LayoutGrid';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

function App() {
  const [irSensor, newirSensor] = useState(["empy state", 0, "yay"])
  const [currentUsers, newcurrentUsers] = useState([])
  const [irSensuserActivityor, newuserActivity] = useState([])
  const [ text, newtext] = useState(null)

  return (
    <React.Fragment>
      <NavBar
        name="Seesaw Webinterface"
        irSensor={irSensor}
      >
        {irSensor}
      </NavBar>

      <LayoutGrid
        name="getting there"
        irSensor={irSensor}
      />
      <p>You clicked {irSensor} times</p>
      <button onClick={() => newirSensor(irSensor + 1)}>
        Click me
      </button>
      <wsCom></wsCom>
    </React.Fragment>
    
  )
}

export default App