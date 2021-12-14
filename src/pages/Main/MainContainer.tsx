import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
import Main from './Main'
import { setQueryString, getVideosId } from './../../redux/mainPageReducer';

const mapStateToProps = (state: AppStateType): {queryString: string} => ({
  queryString: state.main.queryString
})

export default connect(mapStateToProps, {setQueryString, getVideosId})(Main)  
