import React, { useEffect, useState } from 'react'
import "./savedRequests.css"
import "./request.css"
import Modal, { ModalValuesType } from '../../components/modal/Modal'
import { editRequest, getRequests } from '../../localStorageInteraction'
import { Link } from 'react-router-dom'
import { SEARCH_ROUTE } from '../../components/AppRouter'
import { MAIN_ROUTE } from '../../components/AppRouter'
import CheckAuth from '../../components/CheckAuth'


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
                        setModalRequest : (request: ModalValuesType) => void,
                        setModalActive: (x: boolean) => void ) => {




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
      <Link to={SEARCH_ROUTE + `?search_query=${request.request}&maxResults=${request.maxCount}&order=${request.order}`}>
        <div className="buttons_button buttons_search" >
          Выполнить запрос
        </div>
      </Link>
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
      {<CheckAuth />}
      <Modal active={modalActive} setActive={setModalActive} query="" editMode={true} onSubmit={editRequest} request={modalRequest}/>
      <div className="SavedRequests__wrapper">
        Сохраненные запросы
        <Link className="SavedRequests__backButton" to={MAIN_ROUTE} > Вернуться на страницу запроса </Link>
        {requests && requests.map(request => getRequestBlock(request, setModalRequest, setModalActive))}
      </div>
    </div>
  )
}

export default SavedRequests
