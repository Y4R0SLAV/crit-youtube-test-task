import React, {  useEffect, useState } from 'react'
import "./savedRequests.css"
import "./request.css"
import Modal, { ModalValuesType } from './../../components/Modal/Modal'
import { editRequest, getRequests } from './../../localStorageInteraction'
import CheckAuth from './../../components/CheckAuth'


const getOrder = (order: string ) => {
  switch (order) {
    case "rating": 
      return "Упорядочено по рейтингу"
    case "date":
      return "Упорядочено по дате загрузки"
    case "relevance":
      return "Упорядочено по релевантности"
    case "title":
      return "Упорядочено по названию"
    case "viewCount":
      return "Упорядочено по количеству просмотров"
    default:
      return ""
  }
}

const getRequestBlock = (request: ModalValuesType,
                        requests: Array<ModalValuesType>,
                        setRequests: (requests: Array<ModalValuesType>) => void,
                        setModalRequest : (request: ModalValuesType) => void,
                        setModalActive: (x: boolean) => void ) => {

  const deleteRequest = (deletingRequest: ModalValuesType) => {
    let newRequests = requests.filter((request: ModalValuesType) => (request.name !== deletingRequest.name))
    localStorage.setItem('requests', JSON.stringify(newRequests))
    setRequests(newRequests)
  }


  return (
  <div className="content">
    <div className="content__request request">
      <div className="request__title">
        {request.name}
      </div>
      <div className="request__request">
        {request.request}
      </div>
      <div className="request__info">
        <div className="request__order">
          {getOrder(request.order)}
        </div>
        <div className="request__maxCount">
          {"Не более " + request.maxCount + " видео"}
        </div>
      </div>
    </div>

    <div className="content__buttons buttons">
      <div className="buttons_button buttons_search" onClick={() => {deleteRequest(request)}}>
        Удалить запрос
      </div>
      <div className="buttons_button buttons_edit" onClick={() => {setModalRequest(request); setModalActive(true)}} >
        Редактировать запрос
      </div>
    </div>
  </div>
  
  )
}

const SavedRequests = () => {
  const [modalActive, setModalActive] = useState(false)
  const [requests, setRequests] = useState([] as Array<ModalValuesType>)
  const [modalRequest, setModalRequest] = useState({} as ModalValuesType) 

  useEffect(() => {
    setRequests(getRequests());
  }, [modalActive])


  return (
    <div className="SavedRequests">
      {CheckAuth()}
      <Modal active={modalActive} setActive={setModalActive} query="" editMode={true} onSubmit={editRequest} request={modalRequest}/>
      <div className="SavedRequests__wrapper">
        Сохраненные запросы
        {requests && requests.map(request => getRequestBlock(request, requests, setRequests, setModalRequest, setModalActive))}
      </div>
    </div>
  )
}

export default SavedRequests;
