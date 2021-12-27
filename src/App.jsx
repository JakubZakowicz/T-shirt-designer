import Menu from './Components/Menu'
import Display from './Components/Display'
import { store } from './store'
import { Provider } from 'react-redux'
import './App.css'

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
