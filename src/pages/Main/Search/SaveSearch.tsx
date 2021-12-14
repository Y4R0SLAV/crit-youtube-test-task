import React, { FC } from 'react'
import "./search.css"

const SaveSearch: FC<{setActive: (x: boolean) => void}> = ({setActive}) => {
  return (
    <div className="SaveSearch">
      <div className="SaveSearch__button" onClick={() => setActive(true)}>
        Сохранить запрос
      </div>
      <div className="SaveSearch__button" onClick={() => alert("к сохраненным я запросам перейти должен")}>
        Сохраненные запросы
      </div>
    </div>
  );
}

export default SaveSearch;
