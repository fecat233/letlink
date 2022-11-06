import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axiosInstance from '../../Axios'
import { useRef, useState } from 'react'

function Share() {
  const [file, setFile] = useState(null)
  const { user } = useContext(AuthContext)
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  const desc = useRef()


  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const newPost = {
        userId: user._id,
        desc: desc.current.value
      }
      if(file) {
        const data = new FormData()
        data.append("file", file)
        newPost.img = file.name
        if(data) {
          await axiosInstance.post('/upload', data)
        }
      }
      const res = await axiosInstance.post("/posts", newPost)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='share-container'>
      <div className="share-wrapper">
        <div className="share-top">
          <img
           className='share-profile-img'
           src={user.profilePicture? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + "person/user.png"} alt="" />
          <input
           placeholder='分享此时的想法吧..'
           className="share-input"
           ref={desc}
          />
        </div>
        <hr className="share-hr"></hr>
        <form className="share-buttom" onSubmit={submitHandler}>
          <div className="share-options">
            <label htmlFor='file' className="share-option">
              <PermMedia htmlColor='tomato' className='share-icon'/>
              <span className='share-option-text'>照片 or 视频</span>
              <input
               type="file"
               id="file"
               accept=".png, .jpeg, .jpg"
               onChange={(e) => setFile(e.target.files[0])}
               style={{display: "none"}}
              />
            </label>
            <div className="share-option">
              <Label htmlColor='blue' className='share-icon'/>
              <span className='share-option-text'>标签</span>
            </div>
            <div className="share-option">
              <Room htmlColor='green' className='share-icon'/>
              <span className='share-option-text'>地点</span>
            </div>
            <div className="share-option">
              <EmojiEmotions htmlColor='goldenrod' className='share-icon'/>
              <span className='share-option-text'>心情</span>
            </div>
          </div>
          <button className='share-button' type='submit'>分享</button>
        </form>
      </div>
    </div>
  )
}

export default Share
