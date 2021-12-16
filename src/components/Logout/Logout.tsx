import React from 'react'
import "./logout.css"
import { Link } from 'react-router-dom'
import { AUTH_ROUTE } from '../AppRouter'
import { logout } from '../../redux/authReducer'
import { deleteToken } from './../../localStorageInteraction'
import {useLocation} from "react-router-dom"


const Logout = () => {
  const location = useLocation()

  if (location.pathname === AUTH_ROUTE) {
    return <></>
  }

  return (
      <Link className="Logout" to={AUTH_ROUTE} onClick={() => {logout(); deleteToken()}}>
        <div>
          Выйти
        </div>
      </Link>
  );
}

export default Logout;
