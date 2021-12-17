import { connect } from 'react-redux'
import SavedRequests from './SavedRequests'
import { AppStateType } from '../../redux/store'

const mapStateToProps = (state: AppStateType): {} => ({
})


export default connect(mapStateToProps, {})(SavedRequests)  
