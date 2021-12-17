import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from "./redux/store"
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import Logout from './components/logout/Logout'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Logout />
          {/* КОмпонент для выхода из аккаунта */}
          <AppRouter />
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
