import './profile.css'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../Axios'

function Profile() {
  const [user, setUser] = useState({})
  const username = useParams().username
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axiosInstance.get(`/users?username=${username}`)
      setUser(res.data)
    }
    fetchUser()
  },[username])

  return (
    <>
      <Topbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
               className='profile-img-cover'
               src={user.coverPicture? PUBLIC_FOLDER + user.coverPicture : PUBLIC_FOLDER + 'posts/3.jpg'} alt="" />
              <img
               className='profile-img-user'
               src={user.profilePicture? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + 'person/user.png'} alt="" />
            </div>
            <div className="profile-info">
              <h4 className='profile-info-name'>{user.username}</h4>
              <span className="profile-info-desc">{user.desc}</span>
            </div>
          </div>
          <div className="profile-right-buttom">
            <Feed username={user.username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
