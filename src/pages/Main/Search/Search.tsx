import React, {FC} from 'react'
import "./search.css"

type PropsType = {queryString: string, setQueryString: (x: string) => void, getVideosId: (x: string) => void }


const Search: FC<PropsType> = ({queryString, setQueryString, getVideosId}) => {
  const handleQuery = (e: any) => {
    setQueryString(e.currentTarget.value)
  }

  return (
    <div className="search__wrapper">
      <input type="text" value={queryString} className="form__field form__input" onChange={(e) => handleQuery(e)}/>
      <button className="form__field" onClick={(e) => {e.preventDefault(); getVideosId(queryString)}} > ПОИСК </button>
    </div>
  );
}

export default Search;
