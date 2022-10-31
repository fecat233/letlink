import './sidebar.css'
import { RssFeed, Chat, VideoLabel, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className='sidebar-icon'/>
            <span className="sidebar-list-item-text">反馈</span>
          </li>
          <li className="sidebar-list-item">
            <Chat className='sidebar-icon'/>
            <span className="sidebar-list-item-text">聊天</span>
          </li>
          <li className="sidebar-list-item">
            <VideoLabel className='sidebar-icon'/>
            <span className="sidebar-list-item-text">视频</span>
          </li>
          <li className="sidebar-list-item">
            <Group className='sidebar-icon'/>
            <span className="sidebar-list-item-text">联系人组</span>
          </li>
          <li className="sidebar-list-item">
            <Bookmark className='sidebar-icon'/>
            <span className="sidebar-list-item-text">书签</span>
          </li>
          <li className="sidebar-list-item">
            <HelpOutline className='sidebar-icon'/>
            <span className="sidebar-list-item-text">帮助</span>
          </li>
          <li className="sidebar-list-item">
            <WorkOutline className='sidebar-icon'/>
            <span className="sidebar-list-item-text">工作</span>
          </li>
          <li className="sidebar-list-item">
            <Event className='sidebar-icon'/>
            <span className="sidebar-list-item-text">事件</span>
          </li>
          <li className="sidebar-list-item">
            <School className='sidebar-icon'/>
            <span className="sidebar-list-item-text">课程</span>
          </li>
        </ul>
        <button className="sidebar-button">更多</button>
        <hr className='sidebar-hr'/>
        <ul className="sidebar-friendlist">
          <li className="sidebar-friend">
            <img src="/assets/person/2.png" alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">黄晓</span>
          </li>
          <li className="sidebar-friend">
            <img src="/assets/person/2.png" alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">周立</span>
          </li>
          <li className="sidebar-friend">
            <img src="/assets/person/2.png" alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">罗宇勤</span>
          </li>
          <li className="sidebar-friend">
            <img src="/assets/person/2.png" alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">黄晓薇</span>
          </li>
          <li className="sidebar-friend">
            <img src="/assets/person/2.png" alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">刘仕裕</span>
          </li>
          <li className="sidebar-friend">
            <img src="/assets/person/2.png" alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">张诗雨</span>
          </li>
          <li className="sidebar-friend">
            <img src="/assets/person/2.png" alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">徐晓倩</span>
          </li>
          <li className="sidebar-friend">
            <img src="/assets/person/2.png" alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">黄晓</span>
          </li>
          <li className="sidebar-friend">
            <img src="/assets/person/2.png" alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">黄晓</span>
          </li>
          <li className="sidebar-friend">
            <img src="/assets/person/2.png" alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">黄晓</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
