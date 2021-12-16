import React from 'react'
import "./auth.css"
import AuthForm from './AuthForm/authForm'

import data from '../../auth.json'

export const users: Array<{login: string, password: string, id: number}> = Object.keys(data.users) // @ts-ignore
            .map(user => ({login: data.users[user].login, password: data.users[user].password, id: data.users[user].id}))

const Auth = () => {

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
