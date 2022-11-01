import './rightbar.css'
import { Cake } from '@mui/icons-material'
import { Users } from '../../dummyData'
import Online from '../online/Online'

function Rightbar() {
  return (
    <div className='rightbar-container'>
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <Cake className='birthday-icon'/>
          <span className="birthday-text">
            <b>fecat233</b>和<b>其他2位朋友</b>拥有共同生日
          </span>
        </div>
        <img className='rightbar-ad' src="/assets/posts/3.jpg" alt="" />
        <h4 className="rightbar-title">在线的朋友</h4>
        <ul className="rightbar-friends-list">
          {
            Users.map(user => <Online key={user.id} user={user}/>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
