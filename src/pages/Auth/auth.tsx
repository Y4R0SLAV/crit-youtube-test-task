import React from 'react'
import "./auth.css"
import AuthForm from './AuthForm/authForm'

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
