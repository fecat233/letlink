import axiosInstance from "./Axios"
import { loginStart, loginSuccess, loginFailure } from './context/AuthActions'

export const loginCall = async (userCredentials, dispatch) => {
  dispatch(loginStart(userCredentials))
  try {
    const res = await axiosInstance.post('auth/login', userCredentials)
    dispatch(loginSuccess(res.data))
  } catch (error) {
     dispatch(loginFailure(error))
  }
}