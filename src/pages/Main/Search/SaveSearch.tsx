import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import "./search.css"
import Modal from './../../../components/Modal/Modal'
import { saveRequest } from './../../../localStorageInteraction';

const SaveSearch: FC<{queryString: string}> = ({queryString}) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="SaveSearch">
        <Modal active={modalActive} setActive={setModalActive} query={queryString} editMode={false} onSubmit={saveRequest}/>
      
        <div className="SaveSearch__button" onClick={() => setModalActive(true)}>
          Сохранить запрос
        </div>
      
        <Link to="/saved" className="SaveSearch__button">
          <div>
            Сохраненные запросы 
          </div>
        </Link>
      
    </div>
  );
}

export default SaveSearch;
