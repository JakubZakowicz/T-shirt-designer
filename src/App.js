import React from 'react'
import './App.css'
import Menu from './Components/Menu'
import Display from './Components/Display'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Menu />
        <Display />
      </div>
    </Provider>
    
  );
}

export default App;
