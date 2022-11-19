import { useRef } from 'react'
import './register.css'
import axiosInstance from '../../Axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const repassword = useRef()

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    console.log(repassword.current.value)
    console.log(password.current.value)
    if(repassword.current.value !== password.current.value) {
      repassword.current.setCustomValidity('密码不匹配')
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        const res = await axiosInstance.post('auth/register', user)
        navigate('/login')
      } catch (error) {

      }
    }
  }

  return (
    <div className='register-container'>
      <div className="register-wrapper">
        <div className="register-left">
          <h3 className="register-logo">LetLink</h3>
          <span className="register-desc">使用letlink成就世界</span>
        </div>
        <div className="register-right">
          <form className="register-box" onSubmit={handleClick}>
            <input
             placeholder="用户名"
             className="register-input"
             required
             ref={username}
            />
            <input
              placeholder="邮箱"
              className="register-input"
              type="email"
              required
              ref={email}
            />
            <input
              placeholder="密码"
              className="register-input"
              type="password"
              minLength="6"
              required
              ref={password}
            />
            <input
              placeholder="再次输入密码"
              className="register-input"
              type="password"
              minLength="6"
              required
              ref={repassword}
            />
            <button className="register-button">注册</button>
            <button className="register-login-button">登录账户</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
