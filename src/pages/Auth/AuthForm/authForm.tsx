import React from 'react'
import "./authForm.css"
import { Formik, Form, Field } from 'formik'
import { login } from './../../../redux/authReducer'
import { sha256 } from './token-generation'
import { users } from './../Auth'
import { useNavigate } from 'react-router-dom';
import { SEARCH_ROUTE } from '../../../components/AppRouter'


const createToken = (login: string, id: number) => {
  alert(sha256(login))
  const header = JSON.stringify({ "alg": "HS256", "typ": "JWT"})
  const payload = JSON.stringify({ "login": login, "id": id })

  const unsignedToken = btoa(header) + '.' + btoa(payload)
  const signature = sha256(unsignedToken)
  // @ts-ignore
  localStorage.setItem('token', JSON.stringify(btoa(header) + '.' + btoa(payload) + '.' + btoa(signature)))
}

const loginAndCreateToken = () => {
  login()
  createToken("hello", 3)
}

const checkLoginAndPassword = (login: string, password: string) => {
  for (let i = 0; i < users.length; i ++) {
    if (users[i].login === login && users[i].password === password) {
      return true
    }
  }
  return false
}

const AuthForm = () => {
  let navigation = useNavigate()
  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      onSubmit={(values, { setSubmitting, setValues }) => {
        if (checkLoginAndPassword(values.login, values.password)) {
          loginAndCreateToken()
        } else {
          setValues({password: "", login: "Неверные данные"})
        }
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
