import { AppStateType } from "./store"
import { ThunkAction } from 'redux-thunk'
import { deleteVideos, setQueryString } from "./mainPageReducer"

const LOGIN = "auth/LOGIN"
const SET_AUTH_FALSE = "auth/SET_AUTH_FALSE"

type InitialStateType = {
  isAuth: boolean
}

const initialState: InitialStateType = {
  isAuth: false
} 


const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case LOGIN:
      return {...state, isAuth: true}

    case SET_AUTH_FALSE:
        return {...state, isAuth: false}

    default:
      return state
  }
}

type ActionsType = LoginType | LogoutType

type LoginType = { type: typeof LOGIN }
export const login = (): LoginType => ({ type: LOGIN})

type LogoutType = { type: typeof SET_AUTH_FALSE }
export const setAuthFalse = (): LogoutType => ({ type: SET_AUTH_FALSE})


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export const logout = (): ThunkType => async (dispatch: any) => {
  dispatch(setAuthFalse())
  dispatch(deleteVideos())
  dispatch(setQueryString(''))
}

export default authReducer