import React, {FC, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import "./search.css"

type PropsType = {queryString: string, setQueryString: (x: string) => void, getVideosId: (x: string) => void }


const Search: FC<PropsType> = ({queryString, setQueryString, getVideosId}) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const query = params.get('search_query')
    if (query) {
      setQueryString(query)
      getVideosId(query)
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
