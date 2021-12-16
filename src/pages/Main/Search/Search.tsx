import React, {FC, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import "./search.css"

type PropsType = {queryString: string,
                  setQueryString: (x: string) => void,
                  getVideosId: (x: string, maxResults?: number, order?: 'date' | 'rating' | 'viewCount' | 'relevance' | 'title') => void,
                  maxResults?: number,
                  order?: 'date' | 'rating' | 'viewCount' | 'relevance' | 'title' }


const Search: FC<PropsType> = ({queryString, setQueryString, getVideosId, maxResults, order}) => {
  const navigate = useNavigate()
  const location = useLocation()

  if (maxResults || order) {
    getVideosId(queryString, maxResults, order)
    navigate(`?search_query=${queryString}&maxResults=${maxResults}&order=${order}`)
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const query = params.get('search_query')
    const order = params.get('order')
    const maxResults = params.get('maxResults')

    if (query) {
      setQueryString(query)
      if (order && maxResults ) {
        getVideosId(query, +maxResults, order as 'date' | 'rating' | 'viewCount' | 'relevance' | 'title')
      } else if (order) {
        getVideosId(query, undefined, order as 'date' | 'rating' | 'viewCount' | 'relevance' | 'title')
      } else if (maxResults){
        getVideosId(query, +maxResults)
      } else {
        getVideosId(query)
      }
    }
  }, [])


  const handleQuery = (e: any) => {
    setQueryString(e.currentTarget.value)
  }

  const handleSearch = (e: any) => {
    e.preventDefault()
    if (queryString) {
      getVideosId(queryString)
      navigate(`?search_query=${queryString}`)
    } else {
      setQueryString('Влад а4')
    }
  }

  return (
    <div className="search__wrapper">
      <input type="text" value={queryString} className="form__field form__input" onChange={(e) => handleQuery(e)}/>
      <button className="form__field" onClick={(e) => handleSearch(e)} > ПОИСК </button>
    </div>
  );
}

export default Search;
