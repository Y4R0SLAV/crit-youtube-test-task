import React, {FC} from 'react'
import "./logout.css"
import { Link } from 'react-router-dom'
import { AUTH_ROUTE } from '../AppRouter'
import { logout } from '../../redux/authReducer'
import { deleteToken } from '../../localStorageInteraction'
import {useLocation} from "react-router-dom"
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'


const Logout: FC<{logout: () => void}> = ({logout}) => {
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

const mapStateToProps = (state: AppStateType) => ({}) 
export default connect(mapStateToProps, {logout})(Logout)
