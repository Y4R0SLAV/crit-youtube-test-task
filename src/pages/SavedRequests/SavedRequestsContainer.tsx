import { connect } from 'react-redux'
// @ts-ignore
import SavedRequests from './SavedRequests'
import { AppStateType } from '../../redux/store'

const mapStateToProps = (state: AppStateType): {} => ({
})


export default connect(mapStateToProps, {})(SavedRequests)  
