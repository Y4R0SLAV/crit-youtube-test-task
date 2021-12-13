import React from 'react'
import "./main.css"
import Search from './Search/Seach'
import SearchResult from './Search/SeachResult'
import SaveSearch from './Search/SaveSearch'

const Main = () => {
  return (
    <div className="Main">
      <div className="Main__wrapper">
        <Search />
        <SaveSearch />
        <SearchResult />
      </div>
    </div>
  );
}

export default Main;
