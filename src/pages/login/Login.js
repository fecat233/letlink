import './login.css'

function Login() {
  return (
    <div className='login-container'>
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">LetLink</h3>
          <span className="login-desc">使用letlink成就世界</span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input placeholder="邮箱" className="login-input" />
            <input placeholder="密码" className="login-input" />
            <button className="login-button">登录</button>
            <span className="login-forgot">忘记密码？</span>
            <button className="login-register-button">创建账户</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
