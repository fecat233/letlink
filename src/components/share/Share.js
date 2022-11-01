import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
function Share() {
  return (
    <div className='share-container'>
      <div className="share-wrapper">
        <div className="share-top">
          <img className='share-profile-img' src="/assets/person/1.png" alt="" />
          <input placeholder='分享此时的想法吧..' className="share-input" />
        </div>
        <hr className="share-hr"></hr>
        <div className="share-buttom">
          <div className="share-options">
            <div className="share-option">
              <PermMedia htmlColor='tomato' className='share-icon'/>
              <span className='share-option-text'>照片 or 视频</span>
            </div>
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
          <button className='share-button'>分享</button>
        </div>
      </div>
    </div>
  )
}

export default Share
