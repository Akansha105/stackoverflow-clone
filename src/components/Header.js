import React from "react"
import './header.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import CommentIcon from '@mui/icons-material/Comment'
import Avatar from '@mui/material/Avatar'
import Search from "./Search"
const Header = () => {
  return (
    <div className="header">
      <Search />
      <div className="product">Products</div>
      <div className="nav">
        <div className="header-icons">
          <div>
            <ChatBubbleOutlineIcon style={{ color: 'grey' }} />
          </div>
          <div>
            <EmojiEventsIcon style={{ color: 'grey' }} />
          </div>
          <div>
            <CommentIcon style={{ color: 'grey' }} />
          </div>
          <div>
            <Avatar
              alt="user"
              src="https://th.bing.com/th/id/OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw?rs=1&pid=ImgDetMain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;