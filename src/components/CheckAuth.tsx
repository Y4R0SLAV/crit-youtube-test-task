import React, {FC} from 'react'
import { getToken } from '../localStorageInteraction'
import { AUTH_ROUTE } from './AppRouter'
import { Navigate } from 'react-router-dom'
import { AppStateType } from '../redux/store'
import { connect } from 'react-redux'
import { login } from './../redux/authReducer'

const CheckAuth: FC<{login: () => void}> = ({login}) => {  
  const token = getToken()

  alert(token)
  if (!token) {
    return <Navigate to={AUTH_ROUTE} replace={true} />
  }
  login()
  return <></>
}



const mapStateToProps = (state: AppStateType) => ({}) 
export default connect(mapStateToProps, {login})(CheckAuth)