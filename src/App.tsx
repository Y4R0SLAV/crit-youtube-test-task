import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Auth from './pages/Auth/Auth'
import MainContainer from './pages/Main/MainContainer'
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Auth /> */}
        <MainContainer /> 
      </div>
    </Provider>
  );
}

export default App;
