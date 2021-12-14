import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'


import SavedRequestsContainer from '../pages/SavedRequests/SavedRequestsContainer'
import MainContainer from '../pages/Main/MainContainer'
import Auth from '../pages/Auth/Auth'
import Modal from './Modal/Modal';


export const MAIN_ROUTE = '/'
export const SAVED_ROUTE = '/saved'
export const AUTH_ROUTE = '/auth'


const AppRouter = () => {  
  const [modalActive, setModalActive] = useState(false)
  const [modalId, setModalId] = useState(0)

  return (
    <div >
      <Routes>
        <Route path={SAVED_ROUTE} element={<SavedRequestsContainer setActive={setModalActive}/>} />
        <Route path={AUTH_ROUTE} element={<Auth />} /> 
        <Route path={MAIN_ROUTE} element={<MainContainer setActive={setModalActive}/>}>
          <Route path=":q" element={<MainContainer setActive={setModalActive}/>} />
        </Route>
      </Routes>
      <Modal active={modalActive} setActive={setModalActive} query="" />
    </div>
  )
}

export default AppRouter