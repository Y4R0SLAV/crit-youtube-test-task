import React, { FC, useState } from 'react'
import "./savedRequests.css"
import Modal from './../../components/Modal/Modal'
import { deleteRequest, editRequest } from './../../localStorageInteraction'


const SavedRequests: FC<{}> = ({}) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="SavedRequests">
      <Modal active={modalActive} setActive={setModalActive} query={""} editMode={true} onSubmit={editRequest}/>
      <div className="SavedRequests__wrapper">
        Сохраненные запросы
      </div>
    </div>
  )
}

export default SavedRequests;
