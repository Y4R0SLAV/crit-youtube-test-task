import { getToken } from '../localStorageInteraction'
import { AUTH_ROUTE } from './AppRouter'
import { Navigate } from 'react-router-dom'


const CheckAuth = () => {  
  const token = getToken()

  if (!token) {
    return <Navigate to={AUTH_ROUTE} replace={true} />
  }
  return <></>
}


export default CheckAuth