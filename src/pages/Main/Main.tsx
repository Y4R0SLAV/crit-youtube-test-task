import React, { FC } from 'react'
import "./main.css"
import Search from './Search/Seach'
import SearchResult from './Search/SeachResult'
import SaveSearch from './Search/SaveSearch'

type PropsType = {queryString: string, setQueryString: (x: string) => void, getVideosId: () => void }

const Main: FC<PropsType> = ({queryString, setQueryString, getVideosId}) => {
  return (
    <div className="Main">
      <div className="Main__wrapper">
        <Search queryString={queryString} setQueryString={setQueryString} getVideosId={getVideosId}/>
        <SaveSearch />
        <SearchResult />
      </div>
    </div>
  );
}

export default Main;
