import './rightbar.css'
import { Cake } from '@mui/icons-material'
import { Users } from '../../dummyData'
import Online from '../online/Online'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../Axios'
import { AuthContext } from '../../context/AuthContext'
import { Add, Remove } from '@mui/icons-material'


function Rightbar({user}) {
  const [friends, setFriends] = useState([])
  const [followed, setFollowed] = useState(false)
  const { user: currentUser } = useContext(AuthContext)

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id))
  }, [currentUser, user?._id])

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await axiosInstance.get(`/users/friends/${user?._id}`)
        setFriends(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchFriends()
  }, [user?._id])

  const handleFollow = async (e) => {
    e.preventDefault()
    try {
      if(followed) {
        await axiosInstance.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id
        })
      } else {
        await axiosInstance.put(`/users/${user._id}/follow`, {
          userId: currentUser._id
        })
      }
    } catch (error) {
      console.log(error)
    }
    setFollowed(!followed)
  }

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

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
      {user.username !== currentUser.username && (
        <button className='rightbar-follow-btn' onClick={handleFollow}>
          {followed? "取消关注": "关注"}
          {followed? <Remove />: <Add />}
        </button>
      )}
       <h4 className="rightbar-title">用户信息</h4>
       <div className="rightbar-info">
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">所在城市：</span>
          <span className="rightbar-info-value">{user.city}</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">家乡：</span>
          <span className="rightbar-info-value">{user.hometownCity}</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">婚姻：</span>
          <span className="rightbar-info-value">{user.relationship}</span>
        </div>
       </div>
       <h4 className="rightbar-title">朋友</h4>
       <div className="rightbar-followings">
        {
          friends.map((friend) => (
            <Link to={`/profile/${friend.username}`} style={{textDecoration:"none"}}>
              <div className="rightbar-following">
                <img src={friend.profilePicture? PUBLIC_FOLDER + friend.profilePicture : PUBLIC_FOLDER + "person/user.png"} alt="" className="rightbar-following-img" />
                <span className="rightbar-following-name">{friend.username}</span>
              </div>
            </Link>
          ))
        }
       </div>
      </>
    )
  }
  return (
    <div className='rightbar-container'>
      <div className="rightbar-wrapper">
        {user? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar
