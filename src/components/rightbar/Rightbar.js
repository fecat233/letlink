import './rightbar.css'
import { Cake } from '@mui/icons-material'
import { Users } from '../../dummyData'
import Online from '../online/Online'

function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
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
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
       <h4 className="rightbar-title">用户信息</h4>
       <div className="rightbar-info">
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">城市：</span>
          <span className="rightbar-info-value">上海</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">城市：</span>
          <span className="rightbar-info-value">上海</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">城市：</span>
          <span className="rightbar-info-value">上海</span>
        </div>
       </div>
       <h4 className="rightbar-title">朋友</h4>
       <div className="rightbar-followings">
        <div className="rightbar-following">
          <img src="assets/person/1.png" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">徐晓倩</span>
        </div>
        <div className="rightbar-following">
          <img src="assets/person/1.png" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">徐晓倩</span>
        </div>
        <div className="rightbar-following">
          <img src="assets/person/1.png" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">徐晓倩</span>
        </div>
        <div className="rightbar-following">
          <img src="assets/person/1.png" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">徐晓倩</span>
        </div>
        <div className="rightbar-following">
          <img src="assets/person/1.png" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">徐晓倩</span>
        </div>
        <div className="rightbar-following">
          <img src="assets/person/1.png" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">徐晓倩</span>
        </div>
       </div>
      </>
    )
  }
  return (
    <div className='rightbar-container'>
      <div className="rightbar-wrapper">
        {profile? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar
