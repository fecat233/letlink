import './online.css'

function Online({user}) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="rightbar-friend">
      <div className="rightbar-profile-img-container">
        <img className="rightbar-profile-img" src={PUBLIC_FOLDER + user.profilePicture} alt="" />
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar-username">{user.username}</span>
    </li>
  )
}

export default Online
