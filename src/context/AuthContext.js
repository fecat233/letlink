import { createContext, useReducer } from "react"
import authReducer from "./AuthReducer"

const INIT_STATE = {
  user: {
    "_id": "636328bb3674304fdefa7926",
    "username": "fecat233",
    "email": "goleer.zhangli@outlook.com",
    "password": "123456",
    "profilePicture": "person/1.png",
    "coverPicture": "",
    "followers": [],
    "followings": [
      "636255e96e6c44e823f39f12"
    ],
    "isAdmin": false,
    "createdAt": {
      "$date": "2022-11-03T02:34:35.284Z"
    },
    "updatedAt": {
      "$date": "2022-11-04T09:08:11.826Z"
    },
    "__v": 0,
    "city": "上海",
    "hometownCity": "孝感"
  },
  isFetching: false,
  error: false
}

export const AuthContext = createContext(INIT_STATE)

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, INIT_STATE)
  return (
    <AuthContext.Provider value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}>
      {children}
    </AuthContext.Provider>
  )
}