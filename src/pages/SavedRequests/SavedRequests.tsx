import React, { FC } from 'react'
import "./savedRequests.css"

const SavedRequests: FC<{setActive: (x: boolean) => void}> = ({setActive}) => {
  return (
    <div className="SavedRequests">
      <div className="SavedRequests__wrapper">
        Сохраненные запросы
      </div>
    </div>
  );
}

export default SavedRequests;
