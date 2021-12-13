import React from 'react'
import "./authForm.css"
import { Formik, Form, Field } from 'formik'

const AuthForm = () => {
  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
