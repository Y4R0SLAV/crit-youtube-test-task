import React from 'react'
import "./search.css"

const SaveSearch = () => {
  return (
    <div className="SaveSearch">
      <div className="SaveSearch__button" onClick={() => alert("запрос сохранить должен я")}>
        Сохранить запрос
      </div>
    </div>
  );
}

export default SaveSearch;
