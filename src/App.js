import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import { ipcRenderer }  from 'electron'

const sendStartServiceMessage = () => {
  ipcRenderer.send('start-service', {
    command: 'yarn test'
  })
}

ipcRenderer.on( 'service-received-output', ( event , message ) => {
  console.log( message )
} )

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button variant="contained" color="primary" onClick={sendStartServiceMessage}>
          Start the service
        </Button>
      </header>
    </div>
  )
}

export default App;
