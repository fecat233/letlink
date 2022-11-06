import './post.css'
import { MoreVert, ThumbUpAlt, Favorite, ConstructionOutlined } from '@mui/icons-material'
import { useContext, useEffect, useState } from 'react'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import axiosInstance from '../../Axios'
import { AuthContext } from '../../context/AuthContext'

function Post({post}) {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})

  const { user:currentUser } = useContext(AuthContext)

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  const likeHander = async () => {
    try {
      const res =  await axiosInstance.put(`posts/${post._id}/like`, {
        userId: currentUser._id
      })
    } catch (error) {
      console.log(error)
    }
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axiosInstance.get(`users?userId=${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  }, [post.userId])
  return (
    <div className='post-container'>
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <Link to={`/profile/${user.username}`}>
              <img
               className='post-profile-img'
               src={user.profilePicture? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + 'person/user.png'} alt="" />
            </Link>
            <span className="post-user-name">{user.username}</span>
            <span className="post-date">{format(post.createdAt, "zh_CN")}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post.desc}</span>
          <img className='post-img' src={PUBLIC_FOLDER+post.img} alt="" />
        </div>
        <div className="post-buttom">
          <div className="post-buttom-left">
            <ThumbUpAlt className='like-icon' onClick={likeHander}/>
            <span className="post-like-counter">{like}个赞</span>
          </div>
          <div className="post-buttom-right">
            <span className="post-comment-text">{post.comment}条评论</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
