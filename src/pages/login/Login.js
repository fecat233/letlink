import { useContext, useRef } from 'react';
import './login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material'

function Login() {
  const email = useRef()
  const password = useRef()

  const {user, isFetching, error, dispatch} = useContext(AuthContext)

  const handleClick = async (e) => {
    e.preventDefault()
    await loginCall({
      email: email.current.value,
      password: password.current.value
    }, dispatch)
  }

  return (
    <div className='login-container'>
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">LetLink</h3>
          <span className="login-desc">使用letlink成就世界</span>
        </div>
        <div className="login-right">
          <form className="login-box" onSubmit={handleClick}>
            <input
             type="email"
             placeholder="邮箱"
             required
             className="login-input"
             ref={email}/>
            <input
             type="password"
             placeholder="密码"
             minLength="6"
             required
             className="login-input"
             ref={password}/>
            <button className="login-button">{isFetching? <CircularProgress color='inherit' /> : "登录"}</button>
            <span className="login-forgot">忘记密码？</span>
            <button className="login-register-button">创建账户</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
