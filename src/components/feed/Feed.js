import { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import axiosInstance from '../../Axios'
import './feed.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function Feed({username}) {
  const [posts, setPosts] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
      ? await axiosInstance.get(`posts/profile/${username}`)
      : await axiosInstance.get(`posts/timeline/${user._id}`)
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
    }
    fetchPosts()
  },[username, user._id])

  return (
    <div className='feed-container'>
      <div className="feed-wrapper">
        {user.username === username && <Share />}
        {posts.map((post) => (
          <Post key={post._id} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default Feed
