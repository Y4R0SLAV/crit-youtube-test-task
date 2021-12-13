import React from 'react'
import "./search.css"
import { Formik, Form, Field } from 'formik'

const Search = () => {
  return (
    <Formik
      initialValues={{ request: ''}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <Field type="text" name="request" className="form__field form_request" placeholder="Введите запрос"/>
          <button type="submit" disabled={isSubmitting} className="form__field form__button"> 
          {/* ПОТОМ ДОБАВИТЬ ИКОНКУ ВМЕСТО ТЕКСТА */} 
          {/* axios бла бла https://youtube.googleapis.com/youtube/v3/search?q=${request}&key=${API_KEY} */}
            Поиск
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Search;
