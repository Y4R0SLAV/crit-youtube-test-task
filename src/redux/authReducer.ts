

const LOGIN = "auth/LOGIN"
const LOGOUT = "auth/LOGOUT"

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

    case LOGOUT:
        return {...state, isAuth: false}
    default:
      return state
  }
}

type ActionsType = LoginType | LogoutType

type LoginType = { type: typeof LOGIN }
export const login = (): LoginType => ({ type: LOGIN})

type LogoutType = { type: typeof LOGOUT }
export const logout = (): LogoutType => ({ type: LOGOUT})



export default authReducer