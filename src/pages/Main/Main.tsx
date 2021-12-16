import React, { FC } from 'react'
import "./main.css"
import Search from './Search/Search'
import SearchResult from './Search/SeachResult'
import SaveSearch from './Search/SaveSearch'
import { VideoType } from '../../redux/mainPageReducer'
import CheckAuth from '../../components/CheckAuth'
import Auth from '../Auth/Auth'


type PropsType = {queryString: string
                  setQueryString: (x: string) => void
                  getVideosId: (x: string) => void
                  videos: Array<VideoType>
                }

const Main: FC<PropsType> = ({queryString, setQueryString, getVideosId, videos}) => {



  return (
    <div className="Main">
      {CheckAuth()}
      <div className="Main__wrapper">
        <Search queryString={queryString} setQueryString={setQueryString} getVideosId={getVideosId}/>
        <SaveSearch queryString={queryString}/>
        <SearchResult videos={videos}/>
      </div>
    </div>
  );
}

export default Main;
