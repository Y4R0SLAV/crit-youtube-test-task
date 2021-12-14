import React, {FC} from 'react'
import styles from './modal.module.css'
import { Formik, Form, Field } from 'formik'

type Props = {active: boolean, setActive: (x: boolean) => void, query: string}


const ModalForm = () => {
  return <Formik
  initialValues={{ request: '', name: '', sortBy: '', maxCount: 5 }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }}>

  {({ isSubmitting }) => (
    <Form className="form">
      <Field type="text" name="request" className="form__field form__login" onChange={(e: any) => {}}/>
      
      <div>
        <span>Название </span>
        <Field type="text" name="name" className="form__field form__name" placeholder=""/>
      </div>
          
      <div>
        <span>Сортировать по </span>
        <Field as="select" name="sortBy" className="form__field form__sortBy" >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>
      </div>
      
      <div>
        <span>Максимальное количество видео </span>
        <Field type="number" name="maxCount" className="form__field form__maxCount"/>
      </div>
      
      <button type="submit" disabled={isSubmitting} className="form__field form__button">
        Сохранить
      </button>
    </Form>
  )}
</Formik>
}

const Modal: FC<Props> = ({active, setActive, query}) => {
  return <div className={active === true ? styles.modal + " " + styles.active : styles.modal} onClick={() => setActive(false)} >
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <h3>Сохранение запроса</h3>
        <ModalForm />
      </div>
    </div>
}


export default Modal