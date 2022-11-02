import './profile.css'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img className='profile-img-cover' src="assets/posts/3.jpg" alt="" />
              <img className='profile-img-user' src="assets/person/1.png" alt="" />
            </div>
            <div className="profile-info">
              <h4 className='profile-info-name'>fecat233</h4>
              <span className="profile-info-desc">生活要有激情</span>
            </div>
          </div>
          <div className="profile-right-buttom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
