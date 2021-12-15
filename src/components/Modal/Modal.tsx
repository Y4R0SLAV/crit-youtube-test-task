import React, {FC} from 'react'
import styles from './modal.module.css'
import "./modal.css"
import { Formik, Form, Field } from 'formik'

type Props = {active: boolean, setActive: (x: boolean) => void, query: string, editMode: boolean, onSubmit: (x: ModalValuesType) => void}

export type ModalValuesType = {request: string, name: string, order: string, maxCount: number}

const addItemToLocalStorage = ({request, name, order, maxCount} : ModalValuesType) => {
  alert(request + name + order + maxCount)
}

const ModalForm: FC<{query: string, editMode: boolean, onSubmit: (x: ModalValuesType) => void}> = ({query, editMode, onSubmit}) => {
  return <Formik
  initialValues={{ request: query, name: '', order: '', maxCount: 5}}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      values.request = query
      alert(JSON.stringify(values, null, 2))

      onSubmit({...values})

      setSubmitting(false)
    }, 400);
  }}>


  {({ isSubmitting }) => (
    <Form className="modal">
      {editMode ? 
      <div className="modal__form">
        <span className="modal__fieldName">Запрос</span>
        <Field type="text" name="request" className="modal__field  modal__login" />
      </div>  :
      <div className="modal__form">
        <span className="modal__fieldName">Запрос</span>
        <Field type="text" name="request" className="modal__field  modal__login" disabled={true} value={query} />
      </div>
      }
      
      
      <div className="modal__form">
        <span className="modal__fieldName">Название</span>
        <Field type="text" name="name" className="modal__field  modal__name" placeholder="" required={true}/>
      </div>
          
      <div className="modal__form">
        <span className="modal__fieldName">Сортировать по</span>
        <Field as="select" name="order" className="modal__field  modal__sortBy" >
          <option value="">  </option>
          <option value="relevance"> по релевантности </option>
          <option value="date"> по дате загрузки </option>
          <option value="title"> по названию </option>
          <option value="viewCount"> по числу просмотров </option>
          <option value="rating"> по рейтингу </option>
        </Field>
      </div>
      
      <div className="modal__form">
        <span className="modal__fieldName">Максимальное количество видео</span>
        <Field type="number" name="maxCount" min="1" max="50" className="modal__field modal__maxCount"/>
      </div>
      
      <button type="submit" disabled={isSubmitting} className="modal__field  modal__button">
        Сохранить
      </button>
    </Form>
  )}
</Formik>
}

const Modal: FC<Props> = ({active, setActive, query, editMode, onSubmit}) => {

  return <div className={active === true ? styles.modal + " " + styles.active : styles.modal} onClick={() => setActive(false)} >
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <h3>Сохранение запроса</h3>
        <ModalForm query={query} editMode={editMode} onSubmit={onSubmit}/>
      </div>
    </div>
}


export default Modal