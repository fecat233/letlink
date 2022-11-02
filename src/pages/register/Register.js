import './register.css'

function Register() {
  return (
    <div className='register-container'>
      <div className="register-wrapper">
        <div className="register-left">
          <h3 className="register-logo">LetLink</h3>
          <span className="register-desc">使用letlink成就世界</span>
        </div>
        <div className="register-right">
          <div className="register-box">
            <input placeholder="用户名" className="register-input" />
            <input placeholder="邮箱" className="register-input" />
            <input placeholder="密码" className="register-input" />
            <input placeholder="再次输入密码" className="register-input" />
            <button className="register-button">注册</button>
            <button className="register-login-button">登录账户</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
