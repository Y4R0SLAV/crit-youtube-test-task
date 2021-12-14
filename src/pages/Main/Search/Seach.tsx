import React, {FC} from 'react'
import "./search.css"

type PropsType = {queryString: string, setQueryString: (x: string) => void, getVideosId: () => void }


const Search: FC<PropsType> = ({queryString, setQueryString, getVideosId}) => {
  const handleQuery = (e: any) => {
    setQueryString(e.currentTarget.value)
  }

  return (
    <form action="" className="form">
      <input type="text" value={queryString} className="form__field" onChange={(e) => handleQuery(e)}/>
      <button onClick={(e) => {e.preventDefault(); getVideosId()}} > ПОИСК </button>
    </form>
  );
}

export default Search;
