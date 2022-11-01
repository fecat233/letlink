import './post.css'
import { MoreVert, ThumbUpAlt, Favorite } from '@mui/icons-material'
import { Users } from '../../dummyData'
import { useState } from 'react'

function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHander = () => {
    setLike(isLiked ? like -1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post-container'>
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img className='post-profile-img' src={Users.filter(user => user.id === post.userId)[0].profilePicture} alt="" />
            <span className="post-user-name">{Users.filter(user => user.id === post.userId)[0].username}</span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post.desc}</span>
          <img className='post-img' src={post.photo} alt="" />
        </div>
        <div className="post-buttom">
          <div className="post-buttom-left">
            <ThumbUpAlt className='like-icon' onClick={likeHander}/>
            <Favorite className='like-icon' htmlColor='red'/>
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
