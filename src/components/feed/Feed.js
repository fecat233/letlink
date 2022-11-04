import { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import axiosInstance from '../../Axios'
import './feed.css'

function Feed({username}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
      ? await axiosInstance.get(`posts/profile/${username}`)
      : await axiosInstance.get('posts/timeline/636255e96e6c44e823f39f12')
      setPosts(res.data)
    }
    fetchPosts()
  },[username])

  return (
    <div className='feed-container'>
      <div className="feed-wrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default Feed
