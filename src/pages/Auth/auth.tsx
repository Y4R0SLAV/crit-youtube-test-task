import React from 'react'
import "./auth.css"
import AuthForm from './AuthForm/AuthForm'

import data from '../../auth.json'
import { getToken } from '../../localStorageInteraction'
import { Navigate } from 'react-router-dom';
import { SEARCH_ROUTE } from '../../components/AppRouter'

export const users: Array<{login: string, password: string, id: number}> = Object.keys(data.users) // @ts-ignore
            .map(user => ({login: data.users[user].login, password: data.users[user].password, id: data.users[user].id}))

const Auth = () => {

  const token = getToken()

  if (token) {
    return <Navigate to={SEARCH_ROUTE}/>
  }

  return (
    <div className="Auth">
      <div className="Auth__window">  
        <div className="Auth__title">  
          Вход
        </div>
        <AuthForm />
      </div>
    </div>
  );
}

export default Auth;
