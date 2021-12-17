import React from 'react'
import "./authForm.css"
import { Formik, Form, Field } from 'formik'
import { login } from '../../../redux/authReducer'
import { users } from '../auth'
import { useNavigate } from 'react-router-dom';
import { SEARCH_ROUTE } from '../../../components/AppRouter'
// @ts-ignore
import { sha256 } from './token-generation'


const createToken = (login: string, id: number) => {
  const header = JSON.stringify({ "alg": "HS256", "typ": "JWT"})
  const payload = JSON.stringify({ "login": login, "id": id })

  const unsignedToken = btoa(header) + '.' + btoa(payload)
  const signature = sha256(unsignedToken)
  // @ts-ignore
  localStorage.setItem('token', JSON.stringify(btoa(header) + '.' + btoa(payload) + '.' + btoa(signature)))
}

const loginAndCreateToken = (userLogin: string, userId: number) => {
  login()
  createToken(userLogin, userId)
}

const checkLoginAndPassword = (login: string, password: string) => {
  for (let i = 0; i < users.length; i ++) {
    if (users[i].login === login && users[i].password === password) {
      return users[i].id
    }
  }
  return 0
}

const AuthForm = () => {
  let navigation = useNavigate()
  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      onSubmit={(values, { setSubmitting, setValues }) => {
        const userId = checkLoginAndPassword(values.login, values.password)
        {userId ? loginAndCreateToken(values.login, userId) : setValues({password: "", login: "Неверные данные"})}
        
        setSubmitting(false)
        navigation(SEARCH_ROUTE, {replace: true})
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <Field type="login" name="login" className="form__field form__login" placeholder="Логин"/>
          <Field type="password" name="password" className="form__field form__password" placeholder="Пароль"/>
          <button type="submit" disabled={isSubmitting} className="form__field form__button">
            Войти
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AuthForm;
