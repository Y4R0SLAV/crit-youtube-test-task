import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
import Main from './Main'
import { setQueryString, getVideosId, VideoType } from './../../redux/mainPageReducer';

const mapStateToProps = (state: AppStateType): {queryString: string, videos: Array<VideoType>} => ({
  queryString: state.main.queryString,
  videos: state.main.videos
})

export default connect(mapStateToProps, {setQueryString, getVideosId})(Main)  
