import React from 'react'
import './App.css'

const App = () => {
  const onClick = () => {
    const noti = new Notification('Hello', {
      body: 'Click here.',
    });

    noti.onclick = () => {
      console.log('click!');
    }
  }

  return (
    <div className='app'>
      <h1>Electron React App</h1>
      <p>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={onClick}>notification</button>
    </div>
  )
}

export default App;